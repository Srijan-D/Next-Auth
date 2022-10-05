import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
    const session = useSession()
    const { data, status } = session
    console.log("data:" + data)
    console.log("status" + status);
    return (
        <>
            <Link href='/api/auth/signin'>
                <a onClick={e => {
                    e.preventDefault();
                    signIn();
                }}>SignIn</a>
            </Link>
            <Link href='/api/auth/signout'>
                <a onClick={e => {
                    e.preventDefault();
                    signOut();
                }}>Sign out</a>
            </Link>
        </>
    )
}
export default Navbar;
