import { EntitySchema } from "typeorm";
import { User } from "./user.entity";



export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        userName: {
            type: String
        },
        password: {
            type: Number
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        gender: {
            type: String
        },

        phoneNumber: {
            type: Number
        },
        isAdmin: {
            type: Boolean,
            default: false
        }


    },
    relations: {

    }
})