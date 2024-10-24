'use client'
export default function DeleteUser(props){
   var id = props.userId;

   async function deleteUser(){

    var responseData = await fetch(`http://localhost:3000/api/detail/${id}`);
    /* .then((response)=>response.json())
    .then((data)=>console.log(data)); */

    var data = await responseData.json();
    console.log(data);

   }

    return(
        <>
            <button onClick = {deleteUser}>Delete</button>
        </>
    )
}