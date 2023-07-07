import '../../styles/styles.css';

function ImageGrid() {
    return (
        <div className='d-flex flex-wrap justify-content-center mt-5'>
            <img src={require("../../media/images/parallax-1.jpg")} className="grid-image my-3 mx-2 px-2"/>
            <img src={require("../../media/images/parallax-1.jpg")} className="grid-image my-3 mx-2 px-2"/>
        </div >
    )
}

export default ImageGrid;