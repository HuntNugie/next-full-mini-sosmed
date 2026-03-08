// disini untuk operasi ke user

import {HashPassword} from "@/lib/bcrypt/init";
import {ModelPrisma} from "@/lib/prisma/prisma";

const {User} = ModelPrisma();

// mencari data user berdasarkan email
export const GetUserByEmail = async (email: string, relation: boolean = true) => {
    return await User.findUnique({
        where: {
            email,
        },
        include: {
            profile: relation,
        },
    });
};

// untuk menambahkan data user
export type AddUserType = {
    email: string;
    password: string;
    username: string;
    fullname: string;
    age: number;
    photo: string;
};
export const AddUser = async (data: AddUserType) => {
    return await User.create({
        data: {
            email: data.email,
            password: await HashPassword(data.password),
            profile: {
                create: {
                    username: data.username,
                    fullname: data.fullname,
                    age: data.age,
                    photo: data.photo,
                },
            },
        },
    });
};
