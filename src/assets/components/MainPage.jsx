import React, { useState } from "react";
import MealCard from "./MealCard";
import "./Style.css";

function MainPage() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const apiFunction = async () => {
    if (search == "") {
      alert("Please write menu properly");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      setData(jsonData.meals);
    }
  };

  return (
    <div className="container">
      <h1 id="food">Food Gallery</h1>
      <input
        className="input"
        placeholder="Search your dishes"
        onChange={handleChange}
      />
      <button className="btn" onClick={apiFunction}>
        Search
      </button>

      <MealCard data={data} />
    </div>
  );
}

export default MainPage;
