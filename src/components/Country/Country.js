import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, region, population, area, flags } = props.country;
  return (
    <div className="country">
      <h2>Country Name: {name.common}</h2>

      <h3>Region: {region}</h3>
      <h4>Population: {population}</h4>

      <h5>
        Area: {area} Km<sup>2</sup>
      </h5>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
