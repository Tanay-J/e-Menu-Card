import React, { useState } from "react";
import "./styles.css";

var cuisineObj = {
  "All Day Breakfast": [
    { item: "Veg English Breakfast", price: 160 },
    { item: "Non-Veg English Breakfast", price: 190 },
    { item: "American Breakfast", price: 190 },
    { item: "Healthy Breakfast", price: 210 }
  ],
  Salads: [
    { item: "Macroni", price: 120 },
    { item: "Russian", price: 120 },
    { item: "Greek", price: 120 },
    { item: "Caesar", price: 120 },
    { item: "Fruit with whipped cream", price: 120 }
  ],
  Pasta: [
    { item: "Alfredo", price: 160 },
    { item: "Arabiatta", price: 160 },
    { item: "Pesto", price: 180 },
    { item: "Pink Sauce", price: 190 },
    { item: "Lasagna", price: 210 }
  ],
  Toast: [
    { item: "Garlic Cheese", price: 100 },
    { item: "Chilly Cheese", price: 100 },
    { item: "Veg Exotic Toast", price: 120 }
  ],
  Footlong: [
    { item: "Tangy Veg Footlong", price: 140 },
    { item: "Paneer Masala Footlong", price: 160 },
    { item: "Chicken Footlong", price: 170 },
    { item: "Egg Chicken Footlong", price: 180 }
  ]
};

var cuisineKeys = Object.keys(cuisineObj);

export default function App() {
  var [menu, setMenu] = useState("All Day Breakfast");
  function clickHandler(cuisine) {
    setMenu(cuisine);
  }

  return (
    <div className="App">
      <h1> e-Menu Card</h1>
      <h3>A Covid19 safety measure</h3>
      <div>
        {cuisineKeys.map(function (cuisine) {
          return (
            <button
              className="button"
              onClick={function () {
                return clickHandler(cuisine);
              }}
            >
              {cuisine}
            </button>
          );
        })}
      </div>
      <div>
        {console.log(cuisineObj[menu])}
        {cuisineObj[menu].map(function (type) {
          return (
            <div className="list">
              <p>{type.item}</p>
              <p>{type.price} Rs.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
