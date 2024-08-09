import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

function MealCard({ data }) {
  return (
    <div className="main-div">
      {!data
        ? ""
        : data.map((item) => {
            return (
              <div className="mealCard">
                <img className="foodImage" src={item.strMealThumb} />
                <p>{item.strMeal}</p>
                <NavLink to={`/${item.idMeal}`}>
                  <button className="recipe-btn">Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}

export default MealCard;
