'use client';
import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function userListId(context){


    const { id } = context.params;
    
    const [singleUser, setSingleUser] = useState([]);


    useEffect(()=>{
    var url = `http://localhost:3000/api/detail/${id}`;
    fetch(url)
    .then((response)=>response.json())
    .then(function(data){
        setSingleUser(data.data);
    });
    },[]);

    return(
        <>
        {
            singleUser ? singleUser.map((item)=>{
                return(
                    <div key={item.id}>
                        <h3>FirstName: {item.firstName}</h3>
                       <span><Link href= {`${item.id}/update`}>Edit</Link></span> <br></br><br></br>
                       <DeleteUser userId = {item.id}></DeleteUser>
                    </div>
                )
            }) : <h1>Empty Response</h1>
        }
        </>
    )
}