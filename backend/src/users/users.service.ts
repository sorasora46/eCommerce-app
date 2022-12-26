import { Model } from "mongoose"
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { User, UserDocument } from "./user.schema"

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  getHello(): string {
    return "Hello!"
  }
}
