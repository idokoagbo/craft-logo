import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {

    const handleSubmit = (event) => {
        event.preventDefault();

        window.location.href='/order-logo';
    }

    return <nav className="navbar navbar-light navbar-expand-lg bg-light navbar-expand-lg justifty-content-between fixed-top">
        <div className='container'>
            <a
                className="navbar-brand"
                href="/"
                rel="noopener noreferrer"
            >
                <img src={props.logo} width={45} height={45} className="d-inline-block align-top" alt='brand-logo' />
                <span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '46px' }}>The Craft Logo</span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontWeight: '700', fontSize: '18px' }} href="/gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontWeight: '700', fontSize: '18px' }} href="/faqs">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontWeight: '700', fontSize: '18px' }} href="/addons">Addons</a>
                    </li>

                </ul>

                <form onClick={handleSubmit} class="form-inline my-2 my-lg-0 ms-auto">
                    <button type="button" class="btn btn-dark btn-lg " style={{ borderRadius: 50 }} type="submit">Order your Logo &raquo;</button>
                </form>

            </div>
        </div>
    </nav>;
}

export default Nav;