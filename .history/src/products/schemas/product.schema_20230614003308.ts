import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class Product {
  @Prop({ required: true })
  name?: string;

  @Prop({ required: true })
  unitPrice: string;

  @Prop({ required: true })
  availableSince?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
