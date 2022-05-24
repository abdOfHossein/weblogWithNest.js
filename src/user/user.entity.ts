import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    password: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    gender: string

    @Column()
    phoneNumber: number

    @Column({ default: false })
    isAdmin: boolean
}