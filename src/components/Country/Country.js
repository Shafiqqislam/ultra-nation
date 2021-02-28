import React from 'react';

const Country = (props) => {
    const {name,region,population,flag}=props.country;

    const flagStyle ={height:'50px'}
    const countryStyle={border:'1px solid red',margin:'10px',padding:'10px'}
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h2>Name :{name}</h2>
            <h3>Region :{region}</h3>
            <h4>Population :{population}</h4>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;