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

    @Column()
    userName: string

    @Column({default:'123'})
    password: string

    @Column()
    firstName: string

  
    @Column()
    lastName: string

 
    @Column()
    gender: string

   
    @Column()
    phoneNumber: string

    @Column({ default: false })
    isAdmin: boolean

}