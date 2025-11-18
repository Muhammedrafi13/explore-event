import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <p>Explore Events</p>
                </Link>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/">Events</Link>
                    <Link href="/">Create Event</Link>

                </ul>
            </nav>
        </header>
    )
}

export default NavBar