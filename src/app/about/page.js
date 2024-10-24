'use client'
import Link from "next/link";
import {useRouter} from "next/navigation";
import next from "next";
export default function about(){

    const router = useRouter();
    return(
        <>
            <h1>About Page</h1>
            <button onClick={()=>router.push('/')}>Go to home</button>
        </>
    )
}