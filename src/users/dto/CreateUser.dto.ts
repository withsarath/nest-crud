import { IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    displayName?: string;
}