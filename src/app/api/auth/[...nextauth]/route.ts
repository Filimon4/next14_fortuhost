import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithugProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    GithugProvider({
      clientId: '',
      clientSecret: ''
    })
  ],
  pages: {
    signIn: '/signin',
  }
})

export { handler as GET, handler as POST }