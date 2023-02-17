import { ModelExt } from '../../methods/shared.methods.class';
import { IDeletableModel } from '../IDelete/IDelete.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from "class-transformer";

export default class ClientAttributes extends IDeletableModel {
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  code: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  firstName: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  lastName: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @Type(() => Array)
  legalAcceptance: object[]
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  country: object
  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isBussinessPartner: boolean
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  businessPartner: object
}
