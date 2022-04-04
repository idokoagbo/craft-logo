import Nav from '../components/nav';
import Footer from '../components/footer';
import '../assets/style/App.css';
import logo from '../assets/images/logo.svg';
import CircularBtn from '../components/circularBtn';

function Order() {
    return <div className='App'>
        <header className="App-header">
            <Nav logo={logo} />
        </header>

        <section className='mt-5 mb-5'>
            <div className='container'>
                <br />
                <div className='row justify-content-md-center'>
                    <div className='col-md-5'>
                        <div className='' style={{ padding: '20px', borderRaius: '9px', boxShadow: "0px 0px 40px rgba(239, 240, 241, 0.7)" }}>
                            <h1 style={{ fontWeight: '700', fontSize: '36px', lineHeight: '41.4px' }} className="text-center">Input your details</h1>
                            <h2 style={{ fontWeight: '500', fontSize: '18px', lineHeight: '21.09px' }} className="text-center">Check our FAQ</h2>
                            <form>

                                <InputElement text="Logo name" />
                                <InputElement text="Logo tagline" />
                                <InputElement text="Phone no." />
                                <InputElement text="Email" />
                                <InputElement text="Confirm email" />
                                <p><CircularBtn text="Proceed" /></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>;
}

function InputElement(props) {
    return <div className="form-group">
        <label for="exampleFormControlInput1" style={{ fontWeight: '700', fontSize: '18px', lineHeight: '20.7px', padding: '10px 0px' }}>{props.text}</label>
        <input type="text" class="form-control mb-3" id="exampleFormControlInput1" placeholder="" style={{
            backgroundColor: '#F5F8FA', padding: '10px', border: 0,
        }} autoComplete="false" autoCorrect='false' />
    </div>;
}

export default Order;