import bcrypt from "bcryptjs";

// untuk compare passwrod
export const ComparePass = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
};

// untuk hashed password
export const HashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
};
