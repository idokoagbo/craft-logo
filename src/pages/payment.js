import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../components/checkoutform';
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../assets/style/App.css';
import logo from '../assets/images/logo.png';

const stripePromise = loadStripe('pk_test_nmFUiOyKuRx9dVllJJztDvZP00d6gSCafd');

function Stripe() {

    const [loading, setLoading] = useState(true);


    const response = fetch('http://127.0.0.1:3001/secret').then(async (response) => {
        const CLIENT_SECRET = await response.json();
    });

    const options = {
        // passing the client secret obtained in step 2
        clientSecret: "pi_3KlAv2BngKHaStCr1Gyjx3y7_secret_NFXspk2b5uhiu4Ivl9GhDUR48",
        // Fully customizable with appearance API.
        appearance: {/*...*/ },
    };

    return <div className='App'>
        <header className="App-header">
            <Nav logo={logo} />
        </header>

        <section className='mt-5 mb-5' style={{ minHeight: '75vh' }}>
            <div className='container'>
                <br />
                <div className='row justify-content-md-center'>
                    <div className='col-md-5'>
                        <div className='mt-5' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <h1 style={{ fontWeight: '700', fontSize: '36px', lineHeight: '96.4px' }} className="text-center">Payment Type</h1>

                            <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>;
}

export default Stripe;