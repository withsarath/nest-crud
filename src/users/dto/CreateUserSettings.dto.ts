import { IsBoolean, IsOptional } from "class-validator";

export class CreateUserSettingDto{
    
    @IsOptional()
    @IsBoolean()
    receiveNotification?: boolean
    
    @IsOptional()
    @IsBoolean()
    receiveEmails?: boolean;

    @IsOptional()
    @IsBoolean()
    receiveSMS?: boolean;

}