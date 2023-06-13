import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Request() req, @Body() createChiefComplainDto: CreateComplainDto) {
    return this.chiefComplainService.create({
      ...createChiefComplainDto,
      doctorId: req.user.id,
    });
  }

  @Get()
  findAll(@Request() req: any, @Query() queryParams: any) {
    return this.productService.findAll({
      ...queryParams,
    });
  }

  @Patch(':id')
  update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update({ _id: id }, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.productService.remove(id);
  }
}
