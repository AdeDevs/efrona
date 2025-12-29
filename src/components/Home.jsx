import offer from "../assets/offer.png"

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
                        <h1>Our collections</h1>
                        <ul className="collection-control">
                            <li><ion-icon name="arrow-forward-sharp"></ion-icon></li>
                            <li><ion-icon name="arrow-back-sharp"></ion-icon></li>
                        </ul>
                    </div>
                    <div className="collection-box">
                        <div className="collection-card">
                            <button>Open Page</button>
                            <p>Bracelets</p>
                        </div>
                        <div className="collection-card">
                            <button>Open Page</button>
                            <p>Rings</p>
                        </div>
                        <div className="collection-card">
                            <button>Open Page</button>
                            <p>Earings</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}