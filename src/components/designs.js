import CircularBtn from './circularBtn';

// frames
import frame1 from '../assets/images/frames/1.png';
import frame2 from '../assets/images/frames/2.png';
import frame3 from '../assets/images/frames/3.png';
import frame4 from '../assets/images/frames/4.png';
import frame5 from '../assets/images/frames/5.png';

function Designs() {

    const frames = [frame1, frame2, frame3, frame4, frame5, frame3];

    return <section className='mt-5'>
        <div className='container'>
            <h1 style={{ fontWeight: '700', fontSize: '48px', lineHeight: '96px' }} className="text-center">Create your unique logo</h1>
            <div className='row mt-3 mb-5'>

                {
                    frames.map((frame) => {
                        return <div className='col-md-4 col-6 mb-2'>
                            <img src={frame} className="img-fluid" />
                        </div>
                    })
                }
            </div>

            <CircularBtn text='View more designs' link="/gallery" />
        </div>
    </section>
}

export default Designs;