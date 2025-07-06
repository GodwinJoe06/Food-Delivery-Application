// App.js

import React, { useContext } from "react";
import DishesMenu from "./components/DishesMenu";
import Cart from "./components/Cart";
import { RestaurantContext } from "./context/RestaurantContext";
import "./App.css"; // Import the CSS file
import RestaurantList from "./components/RestaurantList";

const App = () => {
    const { selectedRestaurant } = useContext(RestaurantContext);

    return (
        <>
            <div className="container">
                <h1 className="header">GK Food Delivery App</h1>
                <Cart
                    style={{ position: "absolute", right: "20px", top: "20px" }}
                />
                <RestaurantList />
                {selectedRestaurant && <DishesMenu />}
            </div>
        </>
    );
};

export default App;
