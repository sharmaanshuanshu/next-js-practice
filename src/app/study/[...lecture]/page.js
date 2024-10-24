"use client"
export default function Lecture({params}){
    console.log(params)
    return(
        <>
            <h1>{params.lecture[0]}</h1>
            <h1>{params.lecture[1]}</h1>
        </>
    )
}