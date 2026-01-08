import offer from "../assets/offer.png"
import necklace from "../assets/necklace.jpg"
import pendant from "../assets/pendant.png"
import bracelet from "../assets/gold-bra.png"
import batman from "../assets/bat.jpeg"
import yemi from "../assets/yemi.png"
import discount from "../assets/foot.png"
import visa from "../assets/visa.png"
import mastercard from "../assets/mastercard.png"
import amex from "../assets/amex.png"
import jcb from "../assets/jcb.png"
import discover from "../assets/discover.png"
import calendar from "../assets/calendar.png"
import certified from "../assets/certified.png"
import gift from "../assets/gift.png"
import wrap from "../assets/package.png"
import { motion } from "framer-motion";
import {
    fadeUp,
    fadeLeft,
    fadeRigt,
    staggerContainer,
    cardReveal,
} from "../animations/animations";


export default function HomePage() {
    return (
        <div className="home">
            <header className="hero">
                <motion.h1
                    className="jewel"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    Jewelry
                </motion.h1>

                <section className="hero-top">
                    <motion.div
                        className="hero-txt"
                        variants={fadeRigt}
                        initial="hidden"
                        animate="visible"
                    >
                        <p>
                            Our curated collection of fine jewelry is designed to <br />
                            captivate and celebrate the unique essence of every <br />
                            individual.
                        </p>
                        <button>Open Store</button>
                    </motion.div>

                    <motion.div
                        className="hero-offer"
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2>
                            Only today - 50% OFF
                            <button className="round-btn">
                                <ion-icon name="arrow-forward-sharp"></ion-icon>
                            </button>
                        </h2>

                        <img src={offer} alt="offer" />
                    </motion.div>
                </section>

                <section className="hero-foot">
                    <motion.div
                        className="hero-vid"
                        variants={fadeRigt}
                        initial="hidden"
                        animate="visible"
                    >
                        <button className="round-btn">
                            <ion-icon name="play"></ion-icon>
                        </button>
                    </motion.div>

                    <motion.p
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                    >
                        23 Isale General, Ogbomoso <br />
                        Oyo State, Nigeria
                    </motion.p>
                </section>
            </header>

            <main className="home-main">
                <section className="info-box">
                    <ul className="info-items">
                        <motion.li variants={fadeUp} initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}><img src={wrap} alt="package" /> <span>Guaranteed Buy Back</span></motion.li>
                        <motion.li variants={fadeUp} initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}><img src={gift} alt="gift" /> <span>Gift wrapping</span></motion.li>
                        <motion.li variants={fadeUp} initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}><img src={certified} alt="certified" /> <span>tested and trusted</span></motion.li>
                        <motion.li variants={fadeUp} initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}><img src={calendar} alt="calendar" /> <span>14 days return policy</span></motion.li>
                    </ul>
                </section>
                <section className="categories-box">
                <motion.div
                        className="arrival-head"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="big-text">What We Sell</h1>
                        <p>
                            Crafted with precision and passion, these are <br />
                            the pieces that we sell to you and their stories.
                        </p>
                    </motion.div>
                    <motion.div className="categories-card" 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <motion.div className="category" variants={fadeUp}>
                            <div className="ctg-img"></div>
                            <div className="ctg-info">
                                <h1>Diamond</h1>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non labore reprehenderit hic maiores ad laboriosam illum quasi quos? Iste voluptas incidunt ratione aspernatur, officiis perspiciatis voluptates corrupti. Quidem, at.
                                </p>
                                <a href="">See More</a>
                            </div>
                        </motion.div>
                        <motion.div className="category" variants={fadeUp}>
                            <div className="ctg-img"></div>
                            <div className="ctg-info">
                                <h1>Moissanites</h1>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non labore reprehenderit hic maiores ad laboriosam illum quasi quos? Iste voluptas incidunt ratione aspernatur, officiis perspiciatis voluptates corrupti. Quidem, at.
                                </p>
                                <a href="">See More</a>
                            </div>
                        </motion.div>
                        <motion.div className="category" variants={fadeUp}>
                            <div className="ctg-img"></div>
                            <div className="ctg-info">
                                <h1>Zirconia</h1>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non labore reprehenderit hic maiores ad laboriosam illum quasi quos? Iste voluptas incidunt ratione aspernatur, officiis perspiciatis voluptates corrupti. Quidem, at.
                                </p>
                                <a href="">See More</a>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="collections">
                    <motion.div
                        className="collection-head"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="big-text">Our collections</h1>
                        <ul className="btn-control">
                            <li><ion-icon name="arrow-back-sharp"></ion-icon></li>
                            <li><ion-icon name="arrow-forward-sharp"></ion-icon></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="collection-box"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="collection-card bracelets"
                            variants={fadeUp}
                        >
                            <button>Open Page</button>
                            <p>Bracelets</p>
                        </motion.div>

                        <motion.div
                            className="collection-card rings"
                            variants={fadeUp}
                        >
                            <button>Open Page</button>
                            <p>Rings</p>
                        </motion.div>

                        <motion.div
                            className="collection-card earings"
                            variants={fadeUp}
                        >
                            <button>Open Page</button>
                            <p>Earings</p>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="about-box">
                    <motion.div
                        className="about"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="big-text">CEO And Designer</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, saepe nemo molestiae, sint ratione assumenda obcaecati iste quos, ad animi adipisci? Iure nobis deleniti, amet distinctio labore repudiandae alias culpa.
                            Minus tempora temporibus sunt voluptatibus sapiente beatae accusantium autem! Voluptates odit ullam ut quas beatae vel expedita vitae quaerat dolorum enim reprehenderit.
                        </p>
                        <button>Contact Me</button>
                    </motion.div>

                    <motion.div
                        className="info"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="about-img"
                            variants={fadeUp}
                        ></motion.div>

                        <motion.div
                            className="stats"
                            variants={staggerContainer}
                        >
                            <motion.ul variants={fadeUp}>
                                <h3>+300</h3>
                                <li>Successful projects</li>
                            </motion.ul>

                            <motion.ul variants={fadeUp}>
                                <h3>+10</h3>
                                <li>Awards for best design</li>
                            </motion.ul>

                            <motion.ul variants={fadeUp}>
                                <h3>+15</h3>
                                <li>Open Stores</li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="arrivals-box">
                    <motion.div
                        className="arrival-head"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="big-text">Last Arrivals</h1>
                        <p>
                            Crafted with precision and passion, these pieces <br />
                            are destined to become cherished heirlooms.
                        </p>
                    </motion.div>

                    <motion.div
                        className="arrivals"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="arrival-card locket" variants={fadeUp}>
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            {/* <img src={locket} alt="locket" /> */}
                            <div className="arrival-info">
                                <h2>Earings Heart Locket</h2>
                                <p>$620</p>
                            </div>
                        </motion.div>

                        <motion.div className="arrival-card necklace" variants={fadeUp}>
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            <img src={necklace} alt="necklace" />
                            <div className="arrival-info">
                                <h2>Layer cake necklace set</h2>
                                <p>$1200</p>
                            </div>
                        </motion.div>

                        <motion.div className="arrival-card pendant" variants={fadeUp}>
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            <img src={pendant} alt="pendant" />
                            <div className="arrival-info">
                                <h2>t1 circle pendant</h2>
                                <p>$1800</p>
                            </div>
                        </motion.div>

                        <motion.div className="arrival-card golden" variants={fadeUp}>
                            <ul className="arrival-btns">
                                <li><ion-icon name="heart-outline"></ion-icon></li>
                                <li><ion-icon name="cart-outline"></ion-icon></li>
                            </ul>
                            <img src={bracelet} alt="bracelet" />
                            <div className="arrival-info">
                                <h2>gold bracelet with texture</h2>
                                <p>$800</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="arrival-foot"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ul className="btn-control">
                            <li><ion-icon name="arrow-back-sharp"></ion-icon></li>
                            <li><ion-icon name="arrow-forward-sharp"></ion-icon></li>
                        </ul>
                        <ul className="arrival-prd">
                            <li><span></span>48 Products</li>
                            <button>All Products</button>
                        </ul>
                    </motion.div>
                </section>
                <section className="customers-box">
                    <motion.h1
                        className="big-text"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Our Satisfied Customers
                    </motion.h1>

                    <motion.div
                        className="reviews"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="customer" variants={fadeUp}>
                            <img className="avatar" src={batman} alt="avatar" />
                            <div className="testimonial">
                                <p>
                                    "Absolutely in love with my custom necklace from <span>EFRONA</span>. <br />
                                    The attention to detail and the quality of materials <br />
                                    surpassed my expectations.
                                </p>
                                <h3>Dark Knight</h3>
                            </div>
                        </motion.div>

                        <motion.div className="customer" variants={fadeUp}>
                            <img className="avatar" src={yemi} alt="avatar" />
                            <div className="testimonial">
                                <p>
                                    "Absolutely in love with my custom necklace from <span>EFRONA</span>. <br />
                                    The attention to detail and the quality of materials <br />
                                    surpassed my expectations.
                                </p>
                                <h3>Adeyemi</h3>
                            </div>
                        </motion.div>

                        <motion.div className="customer" variants={fadeUp}>
                            <img className="avatar" src={batman} alt="avatar" />
                            <div className="testimonial">
                                <p>
                                    "Absolutely in love with my custom necklace from <span>EFRONA</span>. <br />
                                    The attention to detail and the quality of materials <br />
                                    surpassed my expectations.
                                </p>
                                <h3>Dark Knight</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="contact-box" id="contact-box">
                    <h1 className="big-text">Contact Us</h1>
                    <div className="contact-card">
                        <motion.div className="contact-img"
                            variants={fadeRigt}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.form className="contact-form"
                            action=""
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <input type="text" placeholder="Enter Your Name"  required/>
                            <input type="tel" placeholder="Enter Your Number"  required/>
                            <textarea className="message" placeholder="Enter Your Message" required></textarea>
                            <button>Submit</button>
                        </motion.form>
                    </div>
                </section>
                {/* <section className="discount-box">
                    <motion.div
                        className="discount"
                        variants={fadeRigt}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="big-text">Discounted holiday collection</h1>
                        <p>
                            We have selected for you the best collection for the <br />
                            upcoming holiday with a pleasant discount.
                        </p>
                        <button>Explore More</button>
                    </motion.div>

                    <motion.img
                        src={discount}
                        alt="discount"
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    />
                </section> */}
            </main>
            <footer>
                <section className="home-foot">
                    <motion.div className="foot-intro"
                        variants={cardReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="big-text">EFRONA</h1>
                        <p>23 Isale General, Ogbomoso <br /> Oyo State, Nigeria <a href="#">efrona@gmail.com</a></p>
                        <ul className="cards">
                            <li><img src={visa} alt="visa" /></li>
                            <li><img src={mastercard} alt="mastercard" /></li>
                            <li><img src={amex} alt="amex" /></li>
                            <li><img src={jcb} alt="jcb" /></li>
                            <li><img src={discover} alt="discover" /></li>
                        </ul>
                    </motion.div>
                    <div className="links">
                        <motion.ul
                            variants={cardReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <li className="bold">useful links</li>
                            <li>home</li>
                            <li>our services</li>
                            <li>our story</li>
                            <li>sale</li>
                        </motion.ul>
                        <motion.ul
                            variants={cardReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <li className="bold">contact us</li>
                            <li>+19 2 4567 8900</li>
                            <li>+19 2 4567 9900</li>
                            <br />
                            <li>monday - friday</li>
                            <li>8AM - 5PM</li>
                            <li>Saturday - sunday</li>
                            <li>10AM - 12PM</li>
                        </motion.ul>
                        <motion.ul
                            variants={cardReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <li className="bold">customer service</li>
                            <li>customer care</li>
                            <li>cart</li>
                            <li>privacy policy</li>
                        </motion.ul>
                    </div>
                </section>
                <p className="copyright">Copyright <a href="https://iamadedevs.vercel.app" target="_blank">&copy; AdeDevs</a>. All Rights Reserved.</p>
            </footer>
        </div>
    )
}