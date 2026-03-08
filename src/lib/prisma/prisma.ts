import {PrismaClient} from "@/generated/prisma/index";

const Prisma = new PrismaClient();

export default Prisma;

export const ModelPrisma = () => {
    const User = Prisma.user;
    const user_profile = Prisma.user_profile
    return {
        User,user_profile
    };
};
