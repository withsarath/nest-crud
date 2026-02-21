import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class userService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  //creating user
  async createUser(CreateUserDto: CreateUserDto) {
    const newUser = new this.userModel(CreateUserDto);
    return await newUser.save();
  }

  //get all the users
  async getsUsers(){
     return await this.userModel.find()
  }
  
  async getUserById(id: string){
     return await this.userModel.findById(id)
  }

  async updateUser(id: string, UpdateUserDto: UpdateUserDto){
     return await this.userModel.findByIdAndUpdate(id, UpdateUserDto,{new: true})
  }
  async deleteUser(id: string){
      return await this.userModel.findByIdAndDelete(id)
  }
}
