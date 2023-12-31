import { Document } from 'mongoose';
export interface User extends Document {
  email: string;
  readonly password: string;
  createdAt: Date;
}
