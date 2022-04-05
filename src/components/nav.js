import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {
    return <nav className="navbar navbar-light navbar-expand-lg bg-light navbar-expand-lg fixed-top">
        <div className='container-fluid'>
            <a
                className="navbar-brand"
                href="/"
                rel="noopener noreferrer"
            >
                <img src={props.logo} width={30} height={30} className="d-inline-block align-top" alt='brand-logo' />
                The Craft Logo
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/addons">Addons</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/order-logo">Order your Logo</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>;
}

export default Nav;