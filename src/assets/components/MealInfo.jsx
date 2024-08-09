import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Style.css";

function MealInfo() {
  const { mealid } = useParams();
  const [info, setInfo] = useState();

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    setInfo(jsonData.meals[0]);
  };
  if (info != "") {
    getInfo();
  }

  return (
    <div>
      {!info ? (
        "Loading....."
      ) : (
        <div>
          <div className="cls-div">
            <NavLink to={"/"}>
              <button className="cls-btn">X</button>
            </NavLink>
          </div>
          <div className="info-div">
            <img id="foodDetailsImage" src={info.strMealThumb} />
            <h3 id="meal-name"> ({info.strMeal})</h3>
            <h3 className="instruction-div">Instructions for preparation:</h3>
            <p className="instruction-text">{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealInfo;
