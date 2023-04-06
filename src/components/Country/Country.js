import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country">
      <h2>Country Name: {props.country.name.common}</h2>

      <h3>Region: {props.country.region}</h3>
      <h4>Population: {props.country.population}</h4>

      <h5>Area: {props.country.area}</h5>
    </div>
  );
};

export default Country;
