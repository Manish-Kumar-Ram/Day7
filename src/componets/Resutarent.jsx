import React, { useState } from "react";
import Data from "./Data.json";
import Card from "./Card";

function Restartunts() {
  const [data, setData] = useState(Data);

  const filterData = (name) => {
    let filter = Data.filter((e) => {
      if (e.name.toLowerCase().includes(name.trim())) {
        return true;
      } else {
        return false;
      }
    });
    setData(filter);
  };

  const updateRating = (e) => {
    let obj = [...data];
    obj[0].rating = e.target.value;
    console.log(obj);
    setData(obj);
  };

  return (
    <div className="container">
      <div className="search-filter">
        <div>
          <input
          className="input-ser"
            type="text"
            placeholder="Search restaurants..."
            onChange={(e) => filterData(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating">Minimum Rating:</label>
          <input
            type="number"
            id="rating"
            min={1}
            max={5}
            step={1}
            onChange={updateRating}
          />
        </div>
      </div>
      <div className="cards-container">
        {data.map((e, i) => (
          <Card
            key={i}
            name={e.name}
            code={e.code}
            address={e.address}
            cuisine={e.cuisine}
            ratings={e.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Restartunts;
