import Link from 'next/link';
export function Navbar(){
    return(
        <div className="navbar">
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