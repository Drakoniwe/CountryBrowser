import ArrowLeft from 'Components/IconComponents/ArrowLeft'
import useCountryData from 'Helpers/Hooks/useCountryData'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './CountryDetails.scss'

const CountryDetails: React.FC = () => {
  const params = useParams()
  const { data, error, isLoading } = useCountryData()

  const currentCountryDetail = data?.find(
    (elem) => elem.alpha2Code === params.countryId
  )

  const countryLanguages = currentCountryDetail?.languages.map(
    (language, index) => {
      if (index + 1 < currentCountryDetail?.languages.length) {
        return language.name + ', '
      }
      return language.name
    }
  )

  const borderCountries = data
    ?.filter((country) =>
      currentCountryDetail?.borders?.includes(country.alpha3Code)
    )
    .map((country) => {
      const { name, alpha2Code } = country
      return (
        <Link
          key={alpha2Code}
          to={`/CountryDetails/${alpha2Code}`}
          replace={true}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <button className="CountryDetails-Button">{name}</button>
        </Link>
      )
    })

  if (error === true) {
    return <div>Data could not be loaded</div>
  }

  if (isLoading) {
    return <b>Loading data...</b>
  }

  return (
    <div className="CountryDetails">
      <div className="CountryDetails-LeftMenu">
        <div className="CountryDetails-BackButton">
          <Link
            to={'../..'}
            relative="path"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <button className="CountryDetails-Button">
              <ArrowLeft />
              Back
            </button>
          </Link>
        </div>

        <img
          className="CountryDetails-Flag"
          src={currentCountryDetail?.flag}
        ></img>
      </div>
      <div className="CountryDetails-RightMenu">
        <h2>{currentCountryDetail?.name}</h2>
        <div className="CountryDetails-SectionContainer">
          <div className="CountryDetails-MainSection">
            <section>
              <b>Native Name: </b>
              {currentCountryDetail?.nativeName}
            </section>

            <section>
              <b>Population: </b>
              {currentCountryDetail?.population.toLocaleString('en-US')}
            </section>

            <section>
              <b>Region: </b>
              {currentCountryDetail?.region}
            </section>

            <section>
              <b>Sub region: </b>
              {currentCountryDetail?.subregion}
            </section>

            <section>
              <b>Capital: </b>
              {currentCountryDetail?.capital}
            </section>
          </div>
          <div className="CountryDetails-SecondarySection">
            <section>
              <b>Top Level Domain: </b>
              {currentCountryDetail?.topLevelDomain}
            </section>

            <section>
              <b>Currencies: </b>
              {currentCountryDetail?.currencies.map(
                (currency) => currency.name
              )}
            </section>

            <section>
              <b>Languages: </b>
              {countryLanguages}
            </section>
          </div>
        </div>

        <div className="CountryDetails-BorderCountries">
          <h3> Border Countries:</h3>

          {borderCountries}
        </div>
      </div>
    </div>
  )
}
export default CountryDetails
