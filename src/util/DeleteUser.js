'use client'
export default function DeleteUser(props){
   var id = props.userId;

   async function deleteUser(){

    var responseData = await fetch(`http://localhost:3000/api/detail/${id}`,{
        method: 'DELETE'
    });
    /* .then((response)=>response.json())
    .then((data)=>console.log(data)); */

    var data = await responseData.json();
    console.log(data);

    if(data.success){
        alert('User Deleted Successfully');
    }else{
        alert('Something wrong');
    }

   }

    return(
        <>
            <button onClick = {deleteUser}>Delete</button>
        </>
    )
}