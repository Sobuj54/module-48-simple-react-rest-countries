import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Countries from component..</h2>
      <h1>Available countries: {countries.length}</h1>

      <div className="country-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

// use npm run build to create build file and to deploy in netlify
