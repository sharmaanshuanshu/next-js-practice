'use client';
import { useState } from 'react';
import popupwindow from '../popwindow/page'

export default function model(){
   
   const [showModel, setShowModel] = useState(false);
    return(
        <>       
            {
                showModel ? popupwindow() : ''
            }
            <h1>show popup in Next js</h1>
            <button onClick={()=>setShowModel(true)}>show model</button>
            <button onClick={()=>setShowModel(false)}>Hide model</button>
        </>
    )
}
