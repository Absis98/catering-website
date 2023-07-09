import '../../styles/styles.css';
import Introduction from './Introduction';
import Commitment from './Commitment';
import Carousel from './Carousel';

function Home() {
    return (
        <div>
            {/* <Carousel /> */}
            <Introduction />
            {/* <ImageGrid /> */}
            <Commitment />
        </div>
    )
}

export default Home;