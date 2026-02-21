import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { userService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class userController {
  constructor(private readonly userSevice: userService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userSevice.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.userSevice.getsUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('User Not Found!', 404);
    }
    const user = await this.userSevice.getUserById(id);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return user;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Id not vaild', 400);
    }
    const updateUser = await this.userSevice.updateUser(id, updateUserDto);
    if (!updateUser) {
      throw new HttpException('User Not Found!', 404);
    }
    return updateUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Id not vaild', 400);
    }
    const deletedUser = await this.userSevice.deleteUser(id);
    if (!deletedUser) {
      throw new HttpException('User not found!', 404);
    }
    return deletedUser;
  }
}
