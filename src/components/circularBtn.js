function CircularBtn(props) {
    return <center>
        <a href='' style={{ padding: "13px", borderRadius: '100px' }} className='btn btn-lg btn-dark'>
            <h3 style={{ fontWeight: '500', fontSize: '18px', lineHeight: '' }}>{props.text} &raquo;</h3>
        </a>
    </center>;
}

export default CircularBtn;