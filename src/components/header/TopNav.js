import { useState } from "react";
import "../../styles/styles.css"
import { NavLink } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopNav() {
    const [displayActions, toggleDisplayActions] = useState(false);

    return (
        <div className="topnav">
            <FontAwesomeIcon icon={ displayActions ? faXmark : faBars} onClick={() => toggleDisplayActions(!displayActions)} />
            {displayActions && <div className="myLinks-component">
                <div
                    onClick={() => toggleDisplayActions(false)}
                    className="top-nav-item"
                >
                    <NavLink
                        className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/">
                        Home
                    </NavLink>
                </div>
                <div
                    onClick={() => toggleDisplayActions(false)}
                    className="top-nav-item"
                >
                    <NavLink className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/about">
                        About
                    </NavLink>
                </div>
                <div
                    onClick={() => toggleDisplayActions(false)}
                    className="top-nav-item"
                >
                    <NavLink className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/clients">
                        Clients
                    </NavLink>
                </div>
                <div
                    onClick={() => toggleDisplayActions(false)}
                    className="top-nav-item"
                >
                    <NavLink className={({ isActive }) => (isActive ? "selected" : "not-active-class")}
                        to="/catering-website/contact">
                        Contact
                    </NavLink>
                </div >
            </div >}
        </div >
    )
}

export default TopNav;