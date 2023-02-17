import { ModelExt } from '../../methods/shared.methods.class';
import { IDeletableModel } from '../IDelete/IDelete.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Type } from "class-transformer";

export default class BusinessPartnerAttributes extends IDeletableModel {
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  code: string
  @ApiProperty({
    required: true,
  })
  @IsObject()
  @IsNotEmpty()
  typePerson: object
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  RTN: string
  @ApiProperty({
    required: true,
  })
  @IsObject()
  @IsNotEmpty()
  typeDocument: object
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  idLegalRepresentative: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  businessName: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  address: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string
  @ApiProperty({
    required: true,
  })
  @IsObject()
  @IsNotEmpty()
  productiveSector: object
  @ApiProperty({
    required: true,
  })
  @IsObject()
  @IsNotEmpty()
  locationTwo: object
  @ApiProperty({
    required: true,
  })
  @IsObject()
  @IsNotEmpty()
  locationZone: object
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  references: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  phoneNumberBusiness: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  emailOfficial: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  logo: string
  @ApiProperty({
    required: true,
  })
  @Type(() => Array)
  @IsNotEmpty()
  socialnetwork: object[]
}
