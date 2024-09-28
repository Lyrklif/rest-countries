export const CACHE_TIME: number = 1000 * 60 * 60 * 24

export const fetcher = async (url: string) => await fetch(url).then((response) => response.json())

const API_URL: string = 'https://restcountries.com/v3.1'
const FILTERS: string =
  'name,population,capital,region,subregion,flags,tld,languages,borders,currencies'

export const API = {
  ALL: `${API_URL}/all?fields=${FILTERS}`
}
