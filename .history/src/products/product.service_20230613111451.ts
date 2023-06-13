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

  async create(createProductDto: CreateProductDto) {
    return await new this.productModel({
      ...createProductDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll() {
    try {
      console.log(99999)
      const data = await this.productModel.find();
      return { data: data };
    } catch (error) {
      throw new HttpException(
        'products did not retrieved',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: any) {
    try {
      const data = await this.productModel.deleteMany({ _id: { $in: id.split(",") }});
      return { data: data };
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
