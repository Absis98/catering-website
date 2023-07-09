import "../../styles/styles.css";

function Carousel() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={require("../../media/images/dishes.jpg")} alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={require("../../media/images/dishes2.jpg")} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={require("../../media/images/dishes3.jpg")} alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;