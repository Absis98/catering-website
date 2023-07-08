import "../../styles/styles.css";

function Commitment() {
    window.addEventListener("scroll", function () {
        var parallax = document.querySelector(".parallax-commitment");
        var scrolledHeight = window.pageYOffset;
        if (parallax) {
            parallax.style.backgroundPositionY = 100 + scrolledHeight * (-0.05) + "px";
        }

    });
    return (
        <div>
            <div className='parallax-commitment'></div>
            <div className="d-flex flex-column mt-5 commitment">
                <div className="intro-title">Perfect for every event.</div>
                <div className="mt-3 intro-text">
                    We’re ready to help you with any event, from baby showers and graduations, to weddings and galas, to corporate cocktails and sit down dinners. We’re deeply committed to making your event unforgettable with fabulous food and impeccable service. Whether you’re planning an intimate dinner at home, a gala in a New York City landmark, or a Hamptons wedding, we’ll bring our creativity and expertise to your occasion.
                </div>
            </div>
        </div>
    )
}

export default Commitment;