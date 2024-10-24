
'use client'
import { useEffect } from "react"
import { useState } from "react";

export default function productList(){

    const [data, setData] = useState();

    useEffect(()=>{
        var url = 'http://localhost:3000/api/products';
        fetch(url,{
            method: 'GET'
        })
        .then((response)=>response.json())
        .then((data)=>setData(data))
    },[]);

    return(
        <>
            {
               data ? data.result.map((item, index)=>{
                return(
                    <div key = {index}>
                        <h1>{item.name}</h1>
                        <h2>{item.company}</h2>
                        <h3>{item.price}</h3>
                        <h3>{item.category}</h3>
                        <h4>{item.color}</h4>
                    </div>
                )
               }) : []
            }
        </>
    )
}