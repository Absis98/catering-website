import '../../styles/styles.css';
import Introduction from './Introduction';
import ImageGrid from './ImageGrid';
import Commitment from './Commitment';
import Footer from './Footer';

function Home() {
    window.addEventListener("scroll", function () {
        var parallax = document.querySelector(".parallax");
        var scrolledHeight = window.pageYOffset;
        parallax.style.backgroundPositionY = (scrolledHeight - (scrolledHeight * 1.3)) + "px";
    });
    return (
        <div>
            <div className='parallax'></div>
            <Introduction />
            <ImageGrid />
            <Commitment />
            <Footer />
        </div>
    )
}

export default Home;