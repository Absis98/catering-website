import "../../styles/container.css";
import "../../styles/styles.css";

function Introduction() {
    return (
        <div className="content-container">
            <div className="d-flex flex-column content-text me-4">
                <div className="intro-title">
                    Celebrazione!
                    Italian hospitality at its finest.
                </div>
                <div className="intro-text">
                    Acquolina approaches each event with the special attention it deserves. We’ll work with you every step of the way, bringing with us our innate sense of sophistication and elegance. We specialize in upscale cocktails, seated and buffet dinners, weddings, galas and charity events. With fundamentals in traditional Italian cooking, we customize every menu for each occasion and ensure that you receive the finest in Italian hospitality.
                </div>
            </div>
            <div>
                <img className="waiter-img " src={require('../../media/images/waiter.jpg')}/>
            </div>
        </div>
    )
}

export default Introduction;