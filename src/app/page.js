'use client'
import {useRouter} from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee, faList } from "@fortawesome/free-solid-svg-icons";
import { LeftSideBar } from "./leftsidebar/page";
import './globals.css'
import { Navbar } from "./navbar/page";

export default function Home() {

  const route = useRouter();

  const navigate = (name)=>{
    route.push(name);
  }

  return (
    < >
     {/* <SecondComponent name = 'Ankush Sharma'></SecondComponent> */}
     {/* <button onClick={show}>ClickMe</button> */}
     {/* <button onClick={()=>show('Hello Good Evening')}>ClickMe</button> */}
     {/* <Link href={'/login'}>Go to Login</Link><br></br><br></br>
     <Link href={'/about'}>Go to About</Link><br></br><br></br>
     <button onClick={()=>navigate('/login')}>Go to Login</button>
     <button onClick={()=>navigate('about')}>Go to About</button> */}
     {/* <Link href = {'/addproduct'}>Add product</Link><br></br><br></br>
     <Link href = {'/productlist'}>Prodcut List</Link><br></br><br></br> */}
     {/* <FontAwesomeIcon className="listIcon" icon={faList} onClick={showHideSideBar}></FontAwesomeIcon> */}
     {/* <Navbar></Navbar> */}
     <LeftSideBar></LeftSideBar>   
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
