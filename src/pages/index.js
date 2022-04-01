import logo from '../assets/images/logo.svg';
import '../assets/style/App.css';
import Hero from '../components/hero';
import Nav from '../components/nav';
import section1 from '../assets/images/section1.png';
import footBanner from '../assets/images/banner-foot.png';
// icons
import heart from '../assets/icons/heart.png';
import flash from '../assets/icons/flash.png';
import security from '../assets/icons/security.png';
import truck from '../assets/icons/truck.png';
import shopping from '../assets/icons/shopping.png';
import filter from '../assets/icons/filter.png';

// frames
import frame1 from '../assets/images/frames/1.png';
import frame2 from '../assets/images/frames/2.png';
import frame3 from '../assets/images/frames/3.png';
import frame4 from '../assets/images/frames/4.png';
import frame5 from '../assets/images/frames/5.png';

// usage
import signature from '../assets/images/usage/signature.png';
import sample1 from '../assets/images/usage/sample1.png';
import sample2 from '../assets/images/usage/sample2.png';
import sample3 from '../assets/images/usage/sample3.png';

import shirt1 from '../assets/images/usage/shirt1.png';
import shirt2 from '../assets/images/usage/shirt2.png';

// social
import linkedIn from '../assets/images/social/linkedin.png';
import twitter from '../assets/images/social/twitter.png';
import facebook from '../assets/images/social/facebook.png';
export default function Index() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav logo={logo} />
                <Hero />
            </header>
            <section style={{ padding: '100px 0px' }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-5'>
                            <img src={section1} className="img-fluid" alt="" />
                        </div>
                        <div className='col-md-7'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '60px' }}>Rebrand Yourself, Your Profession, Your Business</h1>
                            <article style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>
                                <p>Rebranding is done by smart professionals who understand that design can make or break a company.</p>
                                <p>Our handcrafted calligraphic distinctive logo is precisely what you need right now. This will improve your image, brand, and business by showcasing your passion or any other significant feature.</p>
                                <p>In the minds of your followers, customers, competitors, and the general public, create a brand and a distinct identity.</p>
                                <p>A generic logo, such as one generated from an internet logo generator, will harm your business.</p>
                                <p>Now is the time to get your one-of-a-kind logo.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <center><h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>Why Signature Logo?</h1></center>
                    <div className='row mt-5'>
                        <div className='col-md-4 mb-3'>
                            <div className='card' style={{ borderRadius: '25px', padding: '10px' }}>
                                <div className='card-body'>
                                    <img src={heart} className="img-fluid mb-3" />
                                    <h1 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Uniqueness</h1>
                                    <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>Your signature logo is uniquely crafted to your specification and this makes it unique to just you and tailored to your need and business purpose.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='card' style={{ borderRadius: '25px', padding: '10px' }}>
                                <div className='card-body'>
                                    <img src={flash} className="img-fluid mb-3" />
                                    <h1 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Easy to Use</h1>
                                    <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>Your signature logo can be use across all forms of branding and design like your social media post, sovenirs, website logo, letter header, business card, etc</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='card' style={{ borderRadius: '25px', padding: '10px' }}>
                                <div className='card-body'>
                                    <img src={filter} className="img-fluid mb-3" />
                                    <h1 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Professionalism</h1>
                                    <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>Anyone using our handcrafted calligraphic logo will definitely stand out among other professionals with a bang.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='card' style={{ borderRadius: '25px', padding: '10px' }}>
                                <div className='card-body'>
                                    <img src={security} className="img-fluid mb-3" />
                                    <h1 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Secure</h1>
                                    <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>All payment is collected through encypted payment gateway so you have nothing to worry about</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='card' style={{ borderRadius: '25px', padding: '10px' }}>
                                <div className='card-body'>
                                    <img src={truck} className="img-fluid mb-3" />
                                    <h1 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Fast Delivery</h1>
                                    <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>In 3 working days your signature logo order will be delivered to you email</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-3'>
                            <div className='card' style={{ borderRadius: '25px', padding: '10px' }}>
                                <div className='card-body'>
                                    <img src={shopping} className="img-fluid mb-3" />
                                    <h1 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>24/7 Shopping</h1>
                                    <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '40px' }}>You can order your signature  logo online anytime of the day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5'>
                <div className='container'>
                    <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }} className="text-center">Creating a logo #Superfast!!!</h1>
                    <h2 style={{ fontWeight: '700', fontSize: '24px', lineHeight: '29.3px' }} className="text-center">With 3 steps you can order your handcrafted calligraphic logo</h2>

                    <div className='row mt-3 mb-3'>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>1.</h1>
                            <p style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Fill your logo details</p>
                        </div>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>2.</h1>
                            <p style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Enter your email</p>
                        </div>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>3.</h1>
                            <p style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Make payment and wait for your logo</p>
                        </div>
                    </div>

                    <center><a href='' style={{ padding: "13px", borderRadius: '100px' }} className='btn btn-lg btn-dark'><h3 style={{ fontWeight: '500', fontSize: '18px', lineHeight: '' }}>Order one now &raquo;</h3></a></center>
                </div>

            </section>
            <section className='mt-5'>
                <div className='container'>
                    <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }} className="text-center">Create your unique logo</h1>
                    <div className='row mt-3 mb-5'>
                        <div className='col-md-4 col-6 mb-2'>
                            <img src={frame1} className="img-fluid" />
                        </div>
                        <div className='col-md-4 col-6 mb-2'>
                            <img src={frame2} className="img-fluid" />
                        </div>
                        <div className='col-md-4 col-6 mb-2'>
                            <img src={frame3} className="img-fluid" />
                        </div>
                        <div className='col-md-4 col-6 mb-2'>
                            <img src={frame4} className="img-fluid" />
                        </div>
                        <div className='col-md-4 col-6 mb-2'>
                            <img src={frame5} className="img-fluid" />
                        </div>
                        <div className='col-md-4 col-6 mb-2'>
                            <img src={frame3} className="img-fluid" />
                        </div>
                    </div>

                    <center>
                        <a href='' style={{ padding: "13px", borderRadius: '100px' }} className='btn btn-lg btn-dark'>
                            <h3 style={{ fontWeight: '500', fontSize: '18px', lineHeight: '' }}>View more designs &raquo;</h3>
                        </a>
                    </center>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }}>Using Your Signature Logo</h1>

                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-6'>
                                    <img src={sample2} className="img-fluid" />
                                </div>
                                <div className='col-6'>
                                    <img src={sample1} className="img-fluid" />
                                </div>
                            </div>
                            <img src={sample3} className="img-fluid mt-3" />
                            <img src={shirt1} className="img-fluid mt-3" />
                        </div>
                        <div className='col-md-6'>
                            <article>
                                <p>Start you business without any hassel, just order you unique logo and start the journey.</p>
                                <p>You logo is applicable in so many ways.</p>
                                <p>Here are some mockups of what you can do with your crafted unique logo.</p>
                                <p>Your imagination is endless, let it reflect on your logo. . .</p>
                            </article>
                            <div className='row align-items-end'>
                                <div className='col'>
                                    <img src={shirt2} className="img-fluid" />
                                </div>
                                <div className='col'>
                                    <img src={signature} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <div className='hero' style={{ padding: '50px', width: '90%', margin: 'auto', borderRadius: '0px 0px 25px 25px' }}>
                        <div className='container text-center'>
                            <div className='row align-items-center text-light'>

                                <div className='col-md-9'>
                                    <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '57.6px' }}>
                                        Now you are here, it's time to order your logo
                                    </h1>

                                    <div className='row mt-5'>
                                        <div className='col-md'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    3 Days Delivery
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Uniqueness
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    3 Free Reviews
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <h1 style={{ fontWeight: '700', fontSize: '64px', lineHeight: '76.8px' }}>£50</h1>
                                    <a href='' style={{ padding: "13px", borderRadius: '100px' }} className='btn btn-lg btn-dark'>
                                        <h3 style={{ fontWeight: '500', fontSize: '18px', lineHeight: '' }}>View more designs &raquo;</h3>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container'>
                    <img src={footBanner} className="img-fluid" />
                </div>
            </section>

            <footer className='bg-dark text-light' style={{ padding: '25px' }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <h1 style={{ fontWeight: '700', fontSize: '24px', lineHeight: '46px' }}>THE CRAFT LOGO</h1>
                            <h4 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '28px', color: 'rgba(255, 255, 255, 0.5)' }}>Just type what's on your mind</h4>
                        </div>
                        <div className='col-md'>
                            <div className='row'>
                                <div className='col-md mb-1'>
                                    <a href="" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Home</a>
                                </div>
                                <div className='col-md mb-1'>
                                    <a href="" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Gallery</a>
                                </div>
                                <div className='col-md mb-1'>
                                    <a href="" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>About</a>
                                </div>
                                <div className='col-md mb-1'>
                                    <a href="" style={{ padding: '10px', textDecoration: 'none', color: "#fff", fontWeight: '700', fontSize: '18px', lineHeight: '20px' }}>Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='row'>
                                <div className='col'>
                                    <img src={twitter} className="img-fluid" />
                                </div>
                                <div className='col'>
                                    <img src={facebook} className="img-fluid" />
                                </div>
                                <div className='col'>
                                    <img src={linkedIn} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}