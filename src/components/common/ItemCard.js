import "../../styles/styles.css";

function ItemCard({menuItem}) {
    return (
        <div key={menuItem.name} >
            <div className="menu-item-card-container m-3">
                <img src={menuItem.imageRoute} style={{ maxWidth: "200px", maxHeight: "200px" }} />
                <div className="menu-item-text-centered"> {menuItem.name} </div>
            </div>
            <div className="d-flex flex-row justify-content-center"><div>{menuItem.name}</div></div>
        </div>
    )
}
export default ItemCard;