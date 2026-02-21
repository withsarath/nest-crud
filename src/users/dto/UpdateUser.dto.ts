import { IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class UpdateUserDto{

    @IsOptional()
    @IsString()
    avatarUrl: string;

    @IsString()
    @IsOptional()
    displayName?: string;
}