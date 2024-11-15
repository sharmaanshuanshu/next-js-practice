'use client'
import { useEffect, useState } from "react";
import '../userlist/userlist.css'
import Link from "next/link";

export default function UserList(){
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
       {/*  {
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
        } */}

        {
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Profile</th>
                    </tr>
                </thead>  
                <tbody>
                    {
                        list.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>ID: {item.id}</td>
                                    <td>FirstName: {item.firstName}</td>
                                    <td>LastName: {item.lastName}</td>
                                    <td>Profile: {item.profile}</td>
                                    {/* <td><Link  href= {`${item.id}/update`}>Edit</Link></td> */}
                                    <td><span><Link href= {`${item.id}/update`}>Edit</Link></span></td>
                                </tr>
                            )
                        })
                    }  
                </tbody>         
            </table>
        }

        </>
    )
}