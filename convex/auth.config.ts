export default {
    providors: [
        {
            domain: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_URL,
            applicationId: process.env.NEXTAUTH_ID,
        }
    ]
}