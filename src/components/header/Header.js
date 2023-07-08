import "../../styles/styles.css";
import { NavLink } from "react-router-dom";
import TopNav from './TopNav';

function Header() {
    return (
        <div className="d-flex justify-content-between p-4 page-header">
            <div>
                Sisodiya Caterers
            </div>
            <div className="d-flex navigation-actions">
                <div className="mx-3">
                    <NavLink
                        className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/">
                        Home
                    </NavLink>
                </div>
                <div className="mx-3">
                    <NavLink className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/about">
                        About
                    </NavLink>
                </div>
                <div className="mx-3">
                    <NavLink className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/clients">
                        Clients
                    </NavLink>
                </div>
                <div className="mx-3">
                    <NavLink className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
            <TopNav />


        </div>
    )
}

export default Header;