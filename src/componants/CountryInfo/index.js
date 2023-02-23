import React from "react";
import LeafletMap from "../LeafletMap";

import useStyle from "./style";

const CountryInfo = (data) => {
  const classes = useStyle();
  return (
    <div>
      <h1 className={classes.countryName}>{data.data.name.common}</h1>
      <h4 className={classes.countryInfo}>Population : {data.data.population.toLocaleString('en-US')} habitants</h4>
      <h4 className={classes.countryInfo}>Capital : {data.data.capital[0]}</h4>

      <h4 className={classes.countryInfo}>Languages : </h4>
      {Object.values(data.data.languages).map(language => (<ul>{language}</ul>))}
      
      <LeafletMap position = {data.data.capitalInfo.latlng}/>
    </div>
  );
};

export default CountryInfo;
