import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { userService } from './user.service';
import { userController } from './user.controller';
import { UserSettings, UserSettingsSchema } from 'src/schemas/UserSettings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: UserSettings.name,
        schema: UserSettingsSchema,
      }
      
    ]),
  ],
  controllers: [userController],
  providers: [userService],
})
export class userModule {}
