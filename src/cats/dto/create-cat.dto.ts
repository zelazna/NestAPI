import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateCatDto {

    @IsOptional()
    @IsInt()
    readonly id?: number;

    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}