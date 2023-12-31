import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";



export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your username"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
        },
        async authorize(credentials) {
            // This is where you retrieve user data from your database to verify with credentials
            // Docs: https://next-auth.js.org/configuration/providers/credentials
            const user = { id:"42", name: "Dave", password: "nextauth" }

            if(credentials?.username === user.name && credentials?.password === user.password) {
                return user
            } else {
                return null
            }
        }
    })]
}