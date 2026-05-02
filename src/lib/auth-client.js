import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient();

// Destructure from the instance created above
export const { signIn, signUp, useSession, signOut } = authClient
