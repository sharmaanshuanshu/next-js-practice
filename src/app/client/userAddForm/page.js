'use client'
import '../userAddForm/userAddForm.css';
import { useState } from "react";

export default function UserAddForm(){

    const [fisrtName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [responseData, setResponseData] = useState({});

    async function addUsers(){

        if(fisrtName == '' || lastName == '' || email == '' || state == ''){
            return false;
        }else{
            var dataObj = {
                fisrtName: fisrtName,
                lastName: lastName,
                email: email,
                state: state
            }
    
            var url = 'http://localhost:3000/api/detail';
            await fetch(url,{
                method: 'POST',
                body: JSON.stringify(dataObj)
            }).then(response => response.json())
            .then(data => setResponseData(data))
            .catch(error => console.error('Error:', error));
        }
    }

    return(
        <>
            <div className = 'form-container'>
                <input type = "text" value = {fisrtName} placeholder = "FirstName" onChange = {(e)=>setFirstName(e.target.value)}></input>
                <input type = "text" value = {lastName} placeholder = "LastName" onChange = {(e)=>setlastName(e.target.value)}></input>
                <input type = "text" value = {email} placeholder = "Email" onChange = {(e)=>setEmail(e.target.value)}></input>
                <input type = "text" value = {state} placeholder = "State" onChange = {(e)=>setState(e.target.value)}></input>
                <button onClick = {addUsers}>Add</button>
            </div>
        </>
    )
}