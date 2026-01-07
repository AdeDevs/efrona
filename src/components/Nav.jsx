import { useEffect, useState } from "react";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    const [changeStuff, setChangeStuff] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect (() => {
        setChangeStuff(!changeStuff)
    }, [showMenu])
    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showMenu]);

    return (
        <div className="nav-bar">
            <nav className={`navigation ${changeStuff ? "" : "show"}`}>
                <ul className="nav">
                    <li className="toggle">
                        <span className="uno"></span>
                        <span className="dos"></span>
                    </li>
                    <li className="toggle mobile" onClick={toggleMenu}>
                        <span className="uno"></span>
                        <span className="dos"></span>
                    </li>
                    <li className="hm">Home</li>
                    <li>Our Story</li>
                    <li>Our Services</li>
                </ul>
                <ul className={`hamburger extras ${showMenu ? "show" : ""}`}>
                    <li onClick={toggleMenu}>Home</li>
                    <li onClick={toggleMenu}>Our Story</li>
                    <li onClick={toggleMenu}>Our Services</li>
                    <a href="#contact-box" onClick={toggleMenu}><button>Contact Us</button></a>
                </ul>

                {/* <h1 className="logo">EFRONA</h1> */}
                <ul className="extras">
                <a href="#contact-box"><button>Contact Us</button></a>
                    <li><ion-icon name="cart-outline"></ion-icon></li>
                </ul>
                
            </nav>
        </div>
    )
}