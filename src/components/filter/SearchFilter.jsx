import React from "react";
import "./searchfilter.scss";
const Filter = () => {
  return (
    <div className="searchfilter">
      <form className="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
        />
      </form>

      <div className="filter">
        <select name="select" id="select">
          <option value="Filter By Region">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
