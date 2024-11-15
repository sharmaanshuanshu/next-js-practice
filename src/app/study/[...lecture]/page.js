"use client"
export default function Lecture({params}){
    return(
        <>
            {
                params.lecture.map(function(items,index){
                    return(
                        <div key = {index}>
                            <h1>{items}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}