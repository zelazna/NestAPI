import { BeforeInsert, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsInt, IsOptional } from 'class-validator';
import { EncryptorService } from '../../encryptor/encryptor.service';

@Entity()
export class User {

    constructor(user) {
        Object.assign(this, user);
    }

    @IsOptional()
    @IsInt()
    @PrimaryGeneratedColumn()
    id?: number;

    @IsString()
    @Column({ length: 500 })
    email: string;

    @IsString()
    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await EncryptorService.encrypt(this.password)
    }
}   