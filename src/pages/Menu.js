import "../styles/styles.css";
import { MenuItems, Cuisines } from "../data/MenuItems";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex">
                <div className="mx-auto menu-page-title ">Our menu</div>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-around">
                {Object.keys(MenuItems).map((type) => {
                    return (
                        <div key={type} className="card m-3 position-static" style={{ width: "18rem" }}>
                            <img className="card-img-top menu-category-card" src={require("../media/images/dishes2.jpg")} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{Cuisines[type]}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink
                                    className="btn btn-primary"
                                    to="/catering-website/menu-items"
                                    state={{ cuisine: type }}>Go somewhere</NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu;