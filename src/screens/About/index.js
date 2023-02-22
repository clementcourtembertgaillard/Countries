import { useContext }from 'react'

import CountriesContext from "../../appContexts/CountriesContext";
import LeafletMap from '../../componants/LeafletMap';

const About=()=>{
    const {countriesCount}=useContext(CountriesContext)
    return(
    <>
        <div>
            <h1>A propos</h1>
            <br />
            <h1>Countries Count : {countriesCount}</h1>
        </div>
        <LeafletMap/>
    </>
    );

}

export default About