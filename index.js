import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
    const session = useSession()
    //in order to only provide with sign out option once the user has signed in and
    //the sign out option only if the user has signed in we use useSession hook provided 
   
    const { data, status } = session
    console.log("data:" + data)
    console.log("status" + status);
    //I have console logged these values for better understanding purposes as based on these destructured values I have rendered the below components
    return (
        <>
            {status !== 'loading' && !data && <Link href='/api/auth/signin'>
                <a onClick={e => {
                    e.preventDefault();
                    signIn();
                }}>SignIn</a>
            </Link>}
            {data && <Link href='/api/auth/signout'>
                <a onClick={e => {
                    e.preventDefault();
                    signOut();
                }}>Sign out</a>
            </Link>}

        </>
    )
}
export default Navbar;
