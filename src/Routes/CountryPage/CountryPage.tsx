import CountryCard from 'Components/CountryCard/CountryCard'
import React, { useState } from 'react'
import './CountryPage.scss'
import ICountry from 'Interfaces/ICountry'
import ReactSelect from 'react-select'
import useCountryData from 'Helpers/Hooks/useCountryData'
import { Link } from 'react-router-dom'

const CountryPage: React.FC = () => {
  const [input, setInput] = useState('')
  const [sort, setSort] = useState(true)
  const [filter, setFilter] = useState<{
    value: null | string
    label: null | string
  }>({ value: null, label: null })
  const { data, isLoading, error } = useCountryData()

  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  const handleSortChange = (): void => {
    setSort(!sort)
  }

  const handleFilterClear = (): void => {
    setFilter({ value: null, label: null })
    setInput('')
  }

  const countriesList = data
    // First sort countries by population
    ?.sort((a: ICountry, b: ICountry) =>
      sort ? b.population - a.population : a.population - b.population
    )
    // Then map countries and apply filtering
    .map((country: ICountry) => {
      const { name, alpha2Code } = country

      // Filter countries by region
      if (filter.label !== null && !country.region.includes(filter.label)) {
        return null
      }

      // Filter countries by user input
      if (input !== '' && !country.name.toLowerCase().includes(input)) {
        return null
      }

      return (
        <Link
          key={name}
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          to={`CountryDetails/${alpha2Code}`}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <CountryCard {...country} />
        </Link>
      )
    })

  if (error === true) {
    return <div>Failed to load data</div>
  }

  return (
    <div className="CountryPage">
      <div className="CountryPage-InputContainer">
        <span className="CountryPage-Input">
          <input
            value={input}
            onChange={(e) => handleInputChange(e)}
            placeholder="Search for a country..."
          />
        </span>
        <ReactSelect
          classNamePrefix="CountryPage-Select"
          options={options}
          onChange={(e) => e !== null && setFilter(e)}
          placeholder="Filter by region"
          value={filter.value !== null ? filter : null}
        />
      </div>
      {filter.label !== null && (
        <button
          className="CountryPage-RemoveFilter"
          onClick={() => handleFilterClear()}
        >
          Remove filters
        </button>
      )}
      <button
        className={`CountryPage-Sort ${sort ? '__sorted' : ''}`}
        onClick={() => handleSortChange()}
      >
        Sort by: Population
      </button>

      <div className="CountryPage-CardContainer">
        {!isLoading && countriesList}
      </div>
    </div>
  )
}
export default CountryPage
