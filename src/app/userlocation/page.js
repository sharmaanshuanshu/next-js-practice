'use client'
import Script from "next/script";

export default function userLocatiojn(){
    return(
        <>
            <Script 
            src="/location.js"
            onLoad={()=>{
                console.log('File Loaded');
            }}
            
            />
            <h1>Next Script Tag Component</h1>
        </>
    )}