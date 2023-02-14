import React from 'react'
import './CountryCard.scss'

interface CountryCardProps {
  name: string
  population: number
  region: string
  capital: string
  flag: string
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  population,
  region,
  capital,
  flag
}) => {
  return (
    <div className="CountryCard">
      <img src={flag} alt="Country Flag" className="CountryCard-Flag"></img>
      <div className="CountryCard-Info">
        <h3>{name}</h3>
        <b>Population: </b>
        {population.toLocaleString('en-US')}
        <br />
        <b>Region: </b>
        {region}
        <br />
        <b>Capital: </b>
        {capital}
      </div>
    </div>
  )
}
export default CountryCard
