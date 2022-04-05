import { useState } from 'react';
import sample1 from '../assets/images/samples/1.png'
import sample2 from '../assets/images/samples/2.png'

function Hero() {

    const [logoName, setLogoName] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        window.location.href = document.location.href + `order-logo?name=${logoName}`
    };

    return <div className="hero">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h1 style={{ fontWeight: '700', fontSize: '87px', lineHeight: '96px' }}>
                        Handcrafted  Logo for Professionals
                    </h1>
                    <p style={{ fontWeight: '400', fontSize: '18px', lineHeight: '34px' }}>Get your calligraphic logo in just 3 steps and stand out among other professionals</p>
                    <form onSubmit={handleSubmit}>
                        <div class="input-group mb-3" style={{ width: '70%' }}>
                            <input type="text" onChange={(e) => setLogoName(e.target.value)} class="form-control" placeholder="Enter your logo name" aria-label="logo name" aria-describedby="basic-addon2" style={{ padding: 25, borderRadius: '180px 0px 0px 180px' }} required />
                            <div class="input-group-append">
                                <button class="btn btn-dark" type="submit" style={{ padding: 25, borderRadius: '0px 180px 180px 0px' }}>Order your logo $50 &raquo;</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                    <p><img src={sample1} alt="" /></p>
                    <p><img src={sample2} alt="" /></p>
                </div>
            </div>
        </div>
    </div>
}

export default Hero;