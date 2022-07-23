import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsEmpty } from 'class-validator';

export enum Gender {
  male='male',
  female='female',
  other='other',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.male
  })
  gender: Gender;

  @Column()
  phoneNumber: string;

  @Column({ default: false })
  isAdmin: boolean;
}
