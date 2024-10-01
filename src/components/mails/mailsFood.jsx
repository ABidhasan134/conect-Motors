"use client";
import React, { useEffect, useState } from "react";

const MailsFood = () => {
  const [meails, setmeails] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(process.env.API_KEY_URL)
  const loadmealis = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
      const data = await res.json();
      // console.log(data);
      setmeails(data.meals || []); // if meals is null, set an empty array
    } catch (error) {
      // console.error("Failed to fetch meals", error);
    }
  };

  const handelchange = (e) => {
    e.preventDefault();
    const message = e.target.value;
    setSearch(message);
    // console.log(message);
  };

  useEffect(() => {
    if (search) {
      loadmealis();
    }
  }, [search]);

  return (
    <div>
      <form onChange={handelchange}>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-active btn-accent">Accent</button>
      </form>

      {meails && meails.length > 0 ? (
        <ul >
          {meails.map((meal) => (
            <div className="border-2 m-4">
                <img src={meal.strMealThumb} alt="" />
                <li key={meal.idMeal}>{meal.strMeal}</li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No meals found.</p>
      )}
    </div>
  );
};

export default MailsFood;
