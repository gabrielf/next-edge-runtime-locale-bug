export const config = {
    // Match all pages but /unaffected should be matched
    matcher: ['/', '/((?!unaffected).*)'],
}

export async function middleware(req) {}
