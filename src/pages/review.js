import Nav from '../components/nav';
import Footer from '../components/footer';
import '../assets/style/App.css';
import logo from '../assets/images/logo.svg';
import frame1 from '../assets/images/frames/6.png';
import CircularBtn from '../components/circularBtn';

function Review() {

    const logoOrder = JSON.parse(sessionStorage.getItem('logoOrder')) ?? null;

    return <div className='App'>
        <header className="App-header">
            <Nav logo={logo} />
        </header>

        <section className='mt-5 mb-5' style={{ height: '75vh' }}>
            <div className='container'>
                <br />
                <div className='row justify-content-md-center'>
                    <div className='col-md-8'>
                        <h1 style={{ fontWeight: '700', fontSize: '36px', lineHeight: '41.4px' }} className="text-center">Review your  order</h1>
                        <div className='mb-3' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <div className='row align-items-center'>
                                <div className='col-md-4'>
                                    <img src={frame1} className="img-fluid" />
                                </div>
                                <div className='col-md-8'>
                                    <p>Logo name <span style={{ float: 'right' }}>{logoOrder && logoOrder.logo}</span></p>
                                    <p>Tagline <span style={{ float: 'right' }}>{logoOrder && logoOrder.tag}</span></p>
                                    <p>Phone no. <span style={{ float: 'right' }}>{logoOrder && logoOrder.phone}</span></p>
                                    <p>Email <span style={{ float: 'right' }}>{logoOrder && logoOrder.email}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <div className='row align-items-center'>
                                <div className='col-md-2'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-10'>
                                    <h2 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20px', color: '#090808' }}>Pay extra £15 and get your order in 24hours</h2>
                                </div>
                            </div>
                        </div>
                        <div className='' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <div className='row align-items-center'>
                                <div className='col-md-6'>
                                    <h1 style={{ fontWeight: '700', fontSize: '36px', lineHeight: '41.4px' }}>Total</h1>
                                </div>
                                <div className='col-md-6'>
                                    <span style={{ fontWeight: '700', fontSize: '36px', lineHeight: '41px', color: '#090808', float: 'right' }}>£25</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-center' style={{ fontWeight: '700', fontSize: '15px', lineHeight: '46px', color: 'rgba(0, 0, 0, 0.5)' }}>This is optional, you can proceed to review the order</p>
                        <CircularBtn text="Make payment" link='/payment' />
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>;
}


export default Review;