import '../../styles/styles.css';

function About() {
    window.addEventListener("scroll", function () {
        let parallaxAbout = document.querySelector(".parallax-about");
        let scrolledHeight = window.pageYOffset;
        if (parallaxAbout) {
            parallaxAbout.style.backgroundPositionY = (scrolledHeight - (scrolledHeight * 1.3)) + "px";
        }
    });

    return (
        <div className='about-container'>
            <div className='parallax-about'></div>
            <div className='about-content mx-auto mt-5'>
                <div className='intro-title'>Sanjaysingh Sisodiya</div>
                <div className='intro-text'> Yolanda Garretti began her career in culinary arts as a food correspondent for Vogue Spain. This experience sparked her life-long passion for food and inspired her to study cuisine from a different angle … the kitchen. She enrolled in the Cordon Bleu Culinary Institute in Milan, where she completed her study in Traditional European Cuisine. After graduating, she started a small but exclusive catering business from her Sutton Place townhouse. Soon her creations and sophisticated décor made her known citywide, and she quickly began to outgrow her kitchen. Yolanda opened a small café on Madison Avenue which became the ideal vehicle for her to expand her client base and grow her business. But New York’s social and corporate elite beckoned Yolanda to focus her talents to serve their in-home and large scale catering needs, and she founded Acquolina.
                </div>
            </div>
            {/* <div className='social-work mx-auto'>
                <div className='social-work-flex'>
                    <div className='social-work-content d-flex flex-column'>
                        <div className='intro-title'>
                            How we give back.
                        </div>
                        <div className='intro-text'>
                            Acquolina Catering recognizes that the choices we make today have an impact tomorrow. That’s why we always strive to make sustainable decisions, whether it’s the purveyors we work with or what we do with kitchen waste. We may love orange, but we also love green!

                            We have partnered with Rescuing Leftover Cuisine to donate leftover food to homeless shelters throughout New York City. Catering can be a high waste business and we want to do our part to minimize our impact and feed the hungry.

                            Acquolina Catering also has working kitchen internship programs with Institute for Culinary Education, International Culinary Center, and Monroe College.


                        </div>
                    </div>
                    <div className='we-support d-flex flex-column'>
                        <div className='mb-5'>Organizations we support</div>
                        <div className='my-2'><img className="we-support" src={require("../../media/images/eci.png")}/></div>
                        <div className='my-2'>Police department</div>
                        <div className='my-2'>Govt of India</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About;