'use client'
import Link from "next/link";
import {useRouter} from "next/navigation"
import styles from "./page.module.css";

export default function Home() {

  const route = useRouter();

  const navigate = (name)=>{
    route.push(name);
  }

  return (
    < >
     <h1>Home page</h1>
     {/* <SecondComponent name = 'Ankush Sharma'></SecondComponent> */}
     {/* <button onClick={show}>ClickMe</button> */}
     {/* <button onClick={()=>show('Hello Good Evening')}>ClickMe</button> */}
     {/* <Link href={'/login'}>Go to Login</Link><br></br><br></br>
     <Link href={'/about'}>Go to About</Link><br></br><br></br>
     <button onClick={()=>navigate('/login')}>Go to Login</button>
     <button onClick={()=>navigate('about')}>Go to About</button> */}
     <Link href = {'/addproduct'}>Add product</Link><br></br><br></br>
     <Link href = {'/productlist'}>Prodcut List</Link><br></br><br></br>
    </>
  );
}

 function SecondComponent(props) {
  return (
    <>
     <h1>Hello {props.name}</h1>
    </>
  );
}
