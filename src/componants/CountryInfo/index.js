import React from "react";
import LeafletMap from "../LeafletMap";

const CountryInfo = (data) => {
  console.log(data.data)
  return (
    <div>
      <h1 style={{"margin-left":"10px"}}>{data.data.name.common}</h1>
      <h4 style={{"margin-left":"30px"}}>Population : {data.data.population.toLocaleString('en-US')} habitants</h4>
      <h4 style={{"margin-left":"30px"}}>Capital : {data.data.capital[0]}</h4>
      <LeafletMap position = {data.data.capitalInfo.latlng}/>
    </div>
  );
};

export default CountryInfo;
