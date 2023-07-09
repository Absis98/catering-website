import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { MenuItems } from "../data/MenuItems"
import "../styles/styles.css";
import ItemCard from '../components/common/ItemCard';
function MenuItemsPage() {
    let location = useLocation();
    const { cuisine } = location.state || 'Maharashtrian';
    
    return (
        <div>
            <div>
                {cuisine}
            </div>
            <div className="d-flex flex-wrap justify-content-around">
                {MenuItems[cuisine].map((item) => {
                    return (
                    <ItemCard menuItem={item}/> 
                    )
                })}
            </div>
        </div>
    )
}

export default MenuItemsPage;