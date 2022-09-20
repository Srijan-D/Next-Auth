# Next-Auth
Implementation of NextAuth.js  for authentication using Nextjs

prior to this we need to add the callback url in the applications

example for google:
Authorized redirect URIs=http://localhost:3000/api/auth/callback/google

Authentication for other apps would take place similarly just add the right callback url 

Inside the index.js file I have also shown how to use the inbuilt singIn and signOut functions provided by the next-auth library
