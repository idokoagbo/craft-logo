import { useState } from 'react';
import Modal from "react-bootstrap/Modal";

import Nav from '../components/nav';
import Footer from '../components/footer';
import '../assets/style/App.css';
import logo from '../assets/images/logo.png';

// images

import gallery1 from '../assets/images/gallery/1.png';
import gallery2 from '../assets/images/gallery/2.png';
import gallery3 from '../assets/images/gallery/3.png';
import gallery4 from '../assets/images/gallery/4.png';
import gallery5 from '../assets/images/gallery/5.png';
import gallery6 from '../assets/images/gallery/6.png';
import gallery7 from '../assets/images/gallery/7.png';
import gallery8 from '../assets/images/gallery/8.png';
import gallery9 from '../assets/images/gallery/9.png';
import gallery10 from '../assets/images/gallery/10.png';
import gallery11 from '../assets/images/gallery/11.png';
import gallery12 from '../assets/images/gallery/12.png';

function Gallery() {

    const [show, setShow] = useState(false);
    const [currentDesign, setDesign] = useState(null);

    const selectDesign = (value) => {
        setDesign(value);
        handleShow();
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const images = [
        gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
    ];

    return <>
        <div className='App'>
            <header className="App-header">
                <Nav logo={logo} />
            </header>

            <section className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        {
                            images.map((image, key) => {
                                return <div className='col-md-6 mb-3'>
                                    <a href='#' onClick={() => selectDesign(image)}>
                                        {
                                            key % 2 === 0
                                                ? <img src={image} className="img-fluid" style={{ float: 'right' }} />
                                                : <img src={image} className="img-fluid" />
                                        }
                                    </a>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </div>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <center>
                    <img src={currentDesign} className="img-fluid" />
                </center>
            </Modal.Body>
            <Modal.Footer>
                <a href='/order-logo' style={{ padding: "13px", borderRadius: '100px' }} className='btn btn-dark'>Order this design &raquo;</a>
            </Modal.Footer>
        </Modal>
    </>
}

export default Gallery;