
'use client';
import '../productlist/productlist.css'
import { useEffect, useState } from "react";

export default function ProductList(){

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
            {/* {
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
            } */}

            {
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data ? data.result.map((item, index)=>{
                                return(
                                    <tr key = {index} className = 'td-color'>
                                        <td>{item.name}</td>
                                        <td>{item.company}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>{item.color}</td>
                                    </tr>
                                )
                               }) : []
                        }
                    </tbody>
                </table>
            }

        </>
    )
}