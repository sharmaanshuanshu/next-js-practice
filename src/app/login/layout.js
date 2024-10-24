"use client"
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";
export default function Layout({children}){

    const pathName = usePathname();

    return(
            <div>{
                pathName !== "/login/loginteacher" ? 
            <ul className="login-main">
                <li>
                    <h1>Login NavBar</h1></li>
                <li>
                    <Link href= '/login'>Login</Link>
                </li>
                <li>
                    <Link href= '/login/loginstudent'>Login Student</Link>
                </li>
                <li>
                    <Link href= '/login/loginteacher'>Login Teacher</Link>
                </li>
            </ul> : ''
            }                
                {children}
            </div>
    )
}