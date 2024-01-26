# Server side locale bug when using edge runtime and middleware

Steps to reproduce

1. Create new next 14 app
2. Configure i18n
3. Add a middleware
4. Use the edge runtime for any server side rendered routes (dynamic and static routes)
5. Run app using `npm run dev`
6. Server side locale will always be the default one on first page load/page reload (when navigating on the client side the locale is correct) 
