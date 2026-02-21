import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { userModule } from './users/user.module';
@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://sarathzz:root22@cluster0.jjetjcl.mongodb.net/crud?appName=Cluster0"),userModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
