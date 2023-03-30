# Next-Auth
Implementation of NextAuthJS  for authentication using Nextjs

prior to this we need to add the callback url in the applications

example for google:
Authorized redirect URIs=http://localhost:3000/api/auth/callback/google

Authentication for other apps need to take place similarly just add the right callback url 

Inside the index.js file I have also shown how to use the inbuilt singIn and signOut functions provided by the next-auth library

secret 
Default value: string (SHA hash of the "options" object) in development, no default in production.
Required: Yes, in production!


 Not providing any secret or NEXTAUTH_SECRET will throw an error in production.
A random string is used to hash tokens, sign/encrypt cookies and generate cryptographic keys.


Custom pages / urls can be specified using the pages option though it is not mandatory even for production
