import React from "react";
import LeafletMap from "../LeafletMap";

const CountryInfo = (data) => {
  return (
    <div>
      <h1 style={{"marginLeft":"10px"}}>{data.data.name.common}</h1>
      <h4 style={{"marginLeft":"30px"}}>Population : {data.data.population.toLocaleString('en-US')} habitants</h4>
      <h4 style={{"marginLeft":"30px"}}>Capital : {data.data.capital[0]}</h4>

      <h4 style={{"marginLeft":"30px"}}>Languages : </h4>
      {Object.values(data.data.languages).map(language => (<ul>{language}</ul>))}
      
      <LeafletMap position = {data.data.capitalInfo.latlng}/>
    </div>
  );
};

export default CountryInfo;
