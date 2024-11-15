'use client'

import { useState } from "react";

export default function uploadImage() {

    const [file, setFile] = useState();

    const onSubmit = async (e)=>{
        e.preventDefault();

        const data = new FormData();
        data.set('file', file);

        let result = await fetch("http://localhost:3000/api/upload",{
            method: "POST",
            body: data
        });
        result = await result.json();
        if(result.success){
            alert('image uploaded successfully');
        }
    }

    return(
        <main>
            <form onSubmit = {onSubmit}>
                <h1>Uplaod Image</h1>
                <input type = 'file' name = 'file' onChange = {(e)=>setFile(e.target.files?.[0])}></input>
                <button type = 'submit'>Uplaod Image</button>
            </form>
        </main>    
    )
}


