import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsInt, IsOptional } from 'class-validator';

@Entity()
export class Cat {

    @IsOptional()
    @IsInt()
    @PrimaryGeneratedColumn()
    id?: number;

    @IsString()
    @Column({ length: 500 })
    name: string;

    @IsInt()
    @Column('int')
    age: number;

    @IsString()
    @Column()
    breed: string;
}