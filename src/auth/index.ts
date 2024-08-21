import NextAuth, { AuthOptions, User } from "next-auth";

export const BASE_PATH = '/api/auth';

const authOptions = {
  providers: [],
  basePath: BASE_PATH,
  secret: '123asdasdf123asd'
}

export const {handlers, auth, signIn, signOut} = NextAuth(authOptions)