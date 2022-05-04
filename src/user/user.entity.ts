import { Entity,Column,PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    userName:string
    
    @Column()
    password:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column({default:'male'})
    gender:string

    @Column()
    phoneNumber:number

    @Column()
    isAdmin:boolean
}