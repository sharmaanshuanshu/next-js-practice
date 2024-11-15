import '../leftsidebar/leftsidebar.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee, faList } from "@fortawesome/free-solid-svg-icons";
export function LeftSideBar(){
    return(
        <div className="sidebar">
            <ul>
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/">About</Link>
                </li>
                <li>
                <Link href="/">Services</Link>
                </li>
                <li>
                <Link href="/">Contact</Link>
                </li>
            </ul>
        </div>
    )
}