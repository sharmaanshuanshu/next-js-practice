'use client'
import Link from "next/link";
import {useRouter} from "next/navigation"
export default function login(){

    const router = useRouter();

    return(
        <>
            <h1>Login Page</h1>
            <button onClick={()=>router.push('/')}>Go to home</button>
          
        </>
    )

}