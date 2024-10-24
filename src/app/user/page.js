"use client"
import { useEffect, useState } from "react";
import './user.css'
import Link from "next/link";
import {useRouter} from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.css';

export default function User(){

    const [users, setUsers] = useState([]);
    const route = useRouter();

useEffect(()=>{
    fetch('https://freetestapi.com/api/v1/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error('Error:', error));
},[]);

    return(
        <>
        <div>
            <table className="table">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Occupation</th>
                        <th>Age</th>
                        <th>Phone No:</th>
                        <th colspan="2">Hobbies</th> 
                    </tr>
                    {
                        users.map((record)=>{
                        return(
                            <tr key={record.id} className="tb-tr">
                               <td>{record.id}</td>                               
                                <td>{record.name}</td>                                
                                <td>{record.email}</td>                               
                                <td>{record.occupation}</td>                              
                                <td>{record.age}</td>                               
                                <td>{record.phone}</td> 
                                {
                                 record.hobbies.map((hobby,index)=>{
                                        return(
                                           <td b key={index}>{hobby}</td>
                                        )
                                    })
                                    }
                                    <td><button className="btn btn-primary" onClick={()=>route.push(`/user/${record.id}`)}>Detail</button></td>                                    
                                     {/* <td><li><Link href= '/user/'>Detail</Link></li></td>                                                                               */}
                            </tr>
                        )
                        })
                    }
                </thead>
            </table>  
        </div>         
        </>
    )
}