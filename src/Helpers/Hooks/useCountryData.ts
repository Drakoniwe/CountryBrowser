// Custom SWR fetch hook for getting data about all countries
import { CountryApiEndpoint, getAllCountries } from 'Api/CountryApi'
import ICountry from 'Interfaces/ICountry'
import useSWRImmutable from 'swr/immutable'

const useCountryData: () => {
  data: ICountry[] | undefined
  isLoading: boolean
  error: any
} = () => {
  const { data, isLoading, error } = useSWRImmutable<ICountry[]>(
    CountryApiEndpoint,
    getAllCountries
  )
  return {
    data,
    isLoading,
    error
  }
}
export default useCountryData
