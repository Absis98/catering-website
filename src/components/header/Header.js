import "../../styles/styles.css";

function Header() {
    return(
        <div className="d-flex justify-content-between p-4 page-header">
            <div>
                Sisodiya Caterers
            </div>
            <div className="d-flex navigation-actions">
                <div className="mx-3">About</div>
                <div className="mx-3">Clients</div>
                <div className="mx-3">Contact</div>
            </div>
        </div>
    )
}

export default Header;