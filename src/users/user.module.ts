import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/User.schema";
import { userService } from "./user.service";
import { userController } from "./user.controller";

@Module({
    imports: [MongooseModule.forFeature([{
        name: User.name,
        schema: UserSchema
    }])],
    controllers: [userController],
    providers: [userService]
})
export class userModule{

}