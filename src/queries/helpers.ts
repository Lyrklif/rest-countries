export const CACHE_TIME: number = 1000 * 60 * 60 * 24

export const fetcher = async (url: string) => await fetch(url).then((response) => response.json())

const API_URL: string = 'https://restcountries.com/v3.1'
const LIST_FILTERS: string = '?fields=name,population,capital,region,flags,tld,languages'
const DETAIN_FILTERS: string =
  '?fields=name,population,capital,region,subregion,flags,tld,languages,borders'

export const API = {
  ALL: `${API_URL}/all${LIST_FILTERS}`,
  NAME: (name: string): string => `${API_URL}/name/${name}${LIST_FILTERS}`,
  CODE: (code: string): string => `${API_URL}/alpha/${code}${DETAIN_FILTERS}`,
  REGION: (region: string): string => `${API_URL}/region/${region}${LIST_FILTERS}`
}
