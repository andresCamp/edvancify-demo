import NextAuth, { NextAuthOptions} from "next-auth"
import { options } from './options'
import { NextApiHandler } from "next";
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth(options)


export { handler as GET, handler as POST }




// const authOptions: NextAuthOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//         })
//     ]
// }

// const handler: NextApiHandler = NextAuth(authOptions)




// import NextAuth from "next-auth"
// import GoogleProvider from 'next-auth/providers/google'

// export const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         })
//     ],
//     pages: {
//         signIn: '/signin'
//     }
// }

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
// // export const handler = NextAuth({
// //   ...
// // })
