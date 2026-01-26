import type { NextAuthConfig } from "next-auth"

export default {
    providers: [], // Configured in auth.ts
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // If user is logged in and visits login/signup, redirect to dashboard
                if (nextUrl.pathname === '/login' || nextUrl.pathname === '/signup') {
                    return Response.redirect(new URL('/dashboard', nextUrl))
                }
            }
            return true
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({ token }) {
            return token
        }
    },
} satisfies NextAuthConfig
