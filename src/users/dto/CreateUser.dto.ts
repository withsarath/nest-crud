import { IsNotEmpty, IsOptional, IsString, Min, ValidateNested } from "class-validator";
import { CreateUserSettingDto } from "./CreateUserSettings.dto";

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    displayName?: string;


    @IsOptional()
    @ValidateNested()
    settings?: CreateUserSettingDto;
   
}