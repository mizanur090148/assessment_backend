import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  @InjectModel(Product.name)
  private productModel: Model<ProductDocument>;

  async create(createProductDto: CreateProductDto): Promise<any> {
    try {
      return await this.productModel.create(createProductDto);
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(criteria: any): Promise<any> {
    let { page, perPage } = criteria;
    page = page && page > 0 ? page : 1;
    perPage = perPage && perPage > 0 ? perPage : 5;
    try {
      const total = await this.productModel.countDocuments();
      const products = await this.productModel.find(
        {},
        {},
        {
          skip: (page - 1) * perPage,
          limit: perPage,
          sort: {
            priority: -1,
          },
        },
      );
      return { data: products, total };
    } catch (error) {
      throw new HttpException(
        'Products did not retrieved',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    criteria: any,
    updateProductDto: UpdateProductDto,
  ): Promise<any> {
    try {
      const updateResult = await this.productModel.findByIdAndUpdate(
        criteria,
        updateProductDto,
        { returnOriginal: false },
      );
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const updateResult = await this.productModel.findByIdAndUpdate(
      criteria,
      updateProductDto,
      { returnOriginal: false },
    );

    if (updateResult) {
      return updateResult;
    } else {
      throw new HttpException('Product did not found!', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: any) {
    try {
      const data = await this.productModel.deleteMany({
        _id: { $in: id.split(',') },
      });
      return { data: data };
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
