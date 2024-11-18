import '../leftsidebar/leftsidebar.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { sideBarData } from './sideBarData/page';
export function LeftSideBar(){

    const [isOpen, setIsOpen] = useState(true);

    const toogleSideBar = ()=>{
        setIsOpen(!isOpen);
    }

    return(
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className='sidebar-header'>
                <button className='toogle-btn' onClick={toogleSideBar}>
                    <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>
                </button>
               {/*  <div className='logo'>
                    {
                       <h2>{isOpen == true ? 'My-App' : ''}</h2>
                    }
                </div> */}
            </div>           
            <nav className='nav-menu'>
                    <ul>
                        {sideBarData.map((item, index)=>{
                            return(
                                <li key={index}>
                                    <a href= {item.path}>
                                        {item.icon}
                                        {isOpen ? item.title : ''}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
            </nav> 
        </div>
    )
}