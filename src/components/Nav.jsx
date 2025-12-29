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
                <ul className="nav">
                    <li className="toggle">
                        <span className="uno"></span>
                        <span className="dos"></span>
                    </li>
                    <li className="toggle mobile" onClick={toggleMenu}>
                        <span className="uno"></span>
                        <span className="dos"></span>
                    </li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Store</li>
                </ul>
                <ul className={`hamburger extras ${showMenu ? "show" : ""}`}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Store</li>
                    <button>Contact Us</button>
                </ul>

                <h1 className="logo">EFRONA</h1>
                <ul className="extras">
                    <button>Contact Us</button>
                    <li><ion-icon name="cart-outline"></ion-icon></li>
                </ul>
                
            </nav>
        </div>
    )
}