import axios from 'axios'
import ICountry from 'Interfaces/ICountry'
// Endpoints should be in .env file, but since this is a public API let's make it simpler
export const CountryApiEndpoint = 'https://restcountries.com/v2'

export const CountryApi = axios.create({
  baseURL: CountryApiEndpoint
})

export const getAllCountries = async (): Promise<ICountry[]> => {
  const response = await CountryApi.get('/all')
  return response.data
}
