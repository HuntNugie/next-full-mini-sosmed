import {ComparePass, HashPassword} from "@/lib/bcrypt/init";
import {AddUser, GetUserByEmail} from "@/service/db/User.service";
import NextAuth, {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const AuthOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        // ini untuk login biasa
        Credentials({
            name: "Credentials",
            credentials: {
                email: {type: "email", label: "email"},
                password: {type: "password", label: "password"},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
                // disini auth nya

                // cek terlebih dahulu apakha user ada atau tidak
                const user = await GetUserByEmail(credentials.email);
                if (!user) return null;

                // cek apakah password yang ada di dalam database sama dengna yang di inputkan
                const match = await ComparePass(credentials.password, user.password);
                if (!match) return null;

                // setelah terauth maka kembalikan data user
                return {
                    id: user.id,
                    email: user.email,
                    name: user.profile?.fullname,
                    image: user.profile?.photo,
                    role: user.role,
                };
            },
        }),
        // ini untuk login google
        Google({
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        // token jwt yang akan meyimpan meta data user yang telah berhasil login dimana juga akan memberfikasi apakah user masih valid atau tidak
        jwt({token, user, account}) {
            // disini atur jwt nya
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.picture = user.image;
                token.role = user.role;
            }
            // cek apakah user nya tuh menggunakan provider credentials
            if (account?.provider === "credentials") {
                token.provider = "credentials";
            }

            if (account?.provider === "google") {
                token.provider = "google";
            }
            return token;
        },

        // session disini yang akan mengatur ntar sesison saat aplikasi jalan
        async session({session, token}) {
            // disini atur session nya
            if (session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.image = token.picture;
                session.user.email = token.email;
            }
            return session;
        },
        // disini yang akan memproses proses data user yang sudah login
        async signIn({user, account}) {
            if (account?.provider === "google") {
                const data = await GetUserByEmail(user.email as string);
                // cek apakah data tersebut ada di database atau belum
                if (!data) {
                    const password = await HashPassword(Math.random().toString());
                    await AddUser({
                        email: user.email as string,
                        password,
                        username: user.email?.split("@")[0] as string,
                        age: 0,
                        fullname: user.name as string,
                        photo: user.image as string,
                    });
                }
            }
            return true;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(AuthOptions);
