import offer from "../assets/offer.png"
import locket from "../assets/locket.png"
import necklace from "../assets/necklace.jpg"
import pendant from "../assets/pendant.png"
import bracelet from "../assets/gold-bra.png"

export default function HomePage() {
    return (
        <div className="home">
            <header className="hero">
                <h1 className="jewel">Jewelry</h1>
                <section className="hero-top">
                    <div className="hero-txt">
                        <p>
                            Our curated collection of fine jewelry is designed to <br /> captivate and celebrate the unique essence of every <br /> individual.
                        </p>
                        <button>Open Store</button>
                    </div>
                    <div className="hero-offer">
                        <h2>Only today - 50% OFF <button className="round-btn"><ion-icon name="arrow-forward-sharp"></ion-icon></button></h2>

                        <img src={offer} alt="offer" />
                    </div>
                </section>
                <section className="hero-foot">
                    <div className="hero-vid">
                        <button className="round-btn"><ion-icon name="play"></ion-icon></button>
                    </div>
                    <p>
                        23 Isale General, Ogbomoso <br />
                        Oyo State, Nigeria
                    </p>
                </section>
            </header>
            <main className="home-main">
                <section className="collections">
                    <div className="collection-head">
                        <h1 className="big-text">Our collections</h1>
                        <ul className="btn-control">
                            <li><ion-icon name="arrow-back-sharp"></ion-icon></li>
                            <li><ion-icon name="arrow-forward-sharp"></ion-icon></li>
                        </ul>
                    </div>
                    <div className="collection-box">
                        <div className="collection-card bracelets">
                            <button>Open Page</button>
                            <p>Bracelets</p>
                        </div>
                        <div className="collection-card rings">
                            <button>Open Page</button>
                            <p>Rings</p>
                        </div>
                        <div className="collection-card earings">
                            <button>Open Page</button>
                            <p>Earings</p>
                        </div>
                    </div>
                </section>
                <section className="about-box">
                    <div className="about">
                        <h1 className="big-text">CEO And Designer</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, saepe nemo molestiae, sint ratione assumenda obcaecati iste quos, ad animi adipisci? Iure nobis deleniti, amet distinctio labore repudiandae alias culpa.
                            Minus tempora temporibus sunt voluptatibus sapiente beatae accusantium autem! Voluptates odit ullam ut quas beatae vel expedita vitae quaerat dolorum enim reprehenderit.
                        </p>
                        <button>Contact Me</button>
                    </div>
                    <div className="info">
                        <div className="about-img"></div>
                        <div className="stats">
                            <ul>
                                <h3>+300</h3>
                                <li>Successful projects</li>
                            </ul>
                            <ul>
                                <h3>+10</h3>
                                <li>Awards for best design</li>
                            </ul>
                            <ul>
                                <h3>+15</h3>
                                <li>Open Stores</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="arrivals-box">
                    <div className="arrival-head">
                        <h1 className="big-text">Last Arrivals</h1>
                        <p>Crafted with precision and passion, these pieces <br /> are destined to become cherished heirlooms.</p>
                    </div>
                    <div className="arrivals">
                        <div className="arrival-card locket">
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            {/* <img src={locket} alt="locket" /> */}
                            <div className="arrival-info">
                                <h2>Earings Heart Locket</h2>
                                <p>$620</p>
                            </div>
                        </div>
                        <div className="arrival-card necklace">
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            <img src={necklace} alt="necklace" />
                            <div className="arrival-info">
                                <h2>Layer cake necklace set</h2>
                                <p>$1200</p>
                            </div>
                        </div>
                        <div className="arrival-card pendant">
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            <img src={pendant} alt="pendant" />
                            <div className="arrival-info">
                                <h2>t1 circle pendant</h2>
                                <p>$1800</p>
                            </div>
                        </div>
                        <div className="arrival-card golden">
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            <img src={bracelet} alt="bracelet" />
                            <div className="arrival-info">
                                <h2>gold bracelet with texture</h2>
                                <p>$800</p>
                            </div>
                        </div>
                    </div>
                    <div className="arrival-foot">
                        <ul className="btn-control">
                            <li><ion-icon name="arrow-back-sharp"></ion-icon></li>
                            <li><ion-icon name="arrow-forward-sharp"></ion-icon></li>
                        </ul>
                        <ul className="arrival-prd">
                            <li><span></span>48 Products</li>
                            <button>All Products</button>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}