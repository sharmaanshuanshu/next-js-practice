"use client"
export default function Lecture({params}){
    return(
        <>
            {
                params.lecture.map(function(items,index){
                    return(
                        <h1>{items}</h1>
                    )
                })
            }
        </>
    )
}