'use client';
import { useEffect, useState } from "react";

export default function Update(context){
    var userId = context.params.id;

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [profile, setProfile] = useState('');

    useEffect(()=>{
        getUserDetail();     
    },[]);

    async function GetUserDetail(){
        var response = await fetch(`http://localhost:3000/api/detail/${userId}`);
        var responseData = await response.json();
        responseData.data.map((item)=>{  
            setFirstName(item.firstName);
            setlastName(item.lastName);
            setProfile(item.profile);
        });  
    }

    async function updateUser() {
       var data = await fetch(`http://localhost:3000/api/detail/${userId}`,{
        method: "PUT",
        body: JSON.stringify({firstName,lastName,profile})
       });

       data = await data.json();
       if(data && data.result){
        alert('Prodcut Updated Sucessfully');
       }else{
        alert('Error');
       }
    }

    return(
        <>
            <div className = 'form-container'>
                <input type = "text" value = {firstName} placeholder = "FirstName"  onChange = {(e)=>setFirstName(e.target.value)}></input>
                <input type = "text" value = {lastName} placeholder = "LastName"  onChange = {(e)=>setlastName(e.target.value)}></input>
                <input type = "text" value = {profile} placeholder = "Email"  onChange = {(e)=>setProfile(e.target.value)}></input>
                <button onClick = {updateUser} >Update</button>
            </div>
        </>
    )
}