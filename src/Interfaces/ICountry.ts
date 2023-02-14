export default interface ICountry {
  name: string
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string
  topLevelDomain: string[]
  currencies: ICurrency[]
  languages: ILanguage[]
  borders: string[]
  cioc: string
  flag: string
  alpha2Code: string
  alpha3Code: string
}

interface ICurrency {
  code: string
  name: string
  symbol: string
}

interface ILanguage {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}
