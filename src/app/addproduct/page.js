    'use client';
    import { useState } from 'react';
    import '../addproduct/addproduct.css'
    export default function AddProduct(){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [color, setColor] = useState('');

   async function submitForm(){
        var dataObj = {
            name: name,
            price: price,
            category: category,
            company: company,
            color: color
        }

        var url = 'http://localhost:3000/api/products';

        var result = await fetch(url,{method: 'POST', body: JSON.stringify(dataObj)}),
            data = await result.json();
            if(data.success){
                alert('New Product Added SuccesFully');
            }else{
                alert('Error');
            }
    }

    return(
        <>
            <div className = 'main-container'>
                <input type = 'text' placeholder = 'Enter Name' onChange = {(e)=>setName(e.target.value)}></input>
                <input type = 'text' placeholder = 'Enter price' onChange = {(e)=>setPrice(e.target.value)} ></input>
                <input type = 'text' placeholder = 'Enter category' onChange = {(e)=>setCategory(e.target.value)} ></input>
                <input type = 'text' placeholder = 'Enter company' onChange = {(e)=>setCompany(e.target.value)} ></input>
                <input type = 'text' placeholder = 'Enter color' onChange = {(e)=>setColor(e.target.value)}></input>
                <button onClick = {submitForm}>Add</button>
            </div>
        </>
    )
}