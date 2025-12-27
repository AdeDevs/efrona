import { useEffect, useState } from "react";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showMenu]);

    return (
        <div className="nav-bar">
            <nav className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Store</li>
                </ul>
                <h1 className="logo">EFRONA</h1>
                <ul>
                    <button>Contact Us</button>
                    <li>C</li>
                </ul>
            </nav>
        </div>
    )
}