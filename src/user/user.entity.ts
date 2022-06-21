import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsEmpty } from 'class-validator';

export enum Gender {
    'male',
    'female',
    'other'
}
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @IsEmpty()
    @Column()
    password: string

    @IsEmpty()
    @Column()
    userName: string

    @IsEmpty()
    @Column()
    firstName: string

    @IsEmpty()
    @Column()
    lastName: string

    @IsEmpty()
    @Column()
    gender: string

    @IsEmpty()
    @Column()
    phoneNumber: string

    @Column({ default: false })
    isAdmin: boolean

}