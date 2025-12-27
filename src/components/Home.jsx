import offer from "../assets/offer.png"

export default function HomePage() {
    return (
        <div className="home">
            <header className="hero">
                {/* <h1>Jewelry</h1> */}
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
        </div>
    )
}