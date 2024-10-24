'use client'
import { useEffect, useState } from "react"

export default function userList(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/api/detail')
        .then(response => response.json())
        //.then(data => setList(data))
        .then(function(data){
            setList(data);
        })
        .catch(error => console.error('Error:', error));
    },[]);

    return(
        <>
        {
            list.map((item)=>{
                return(
                    <div key={item.id}>
                        <h3>ID: {item.id}</h3>
                        <h3>FirstName: {item.firstName}</h3>
                        <h3>LastName: {item.lastName}</h3>
                        <h3>Profile: {item.profile}</h3>
                    </div>
                )
            })
        }
        </>
    )
}