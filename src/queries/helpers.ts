export const CACHE_TIME: number = 1000 * 60 * 60 * 24

export const fetcher = async (url: string) => await fetch(url).then((response) => response.json())

const API_URL = 'https://restcountries.com/v3.1'

export const API = {
  ALL: `${API_URL}/all`,
  NAME: (name: string): string => `${API_URL}/name/${name}`,
  CODE: (code: string): string => `${API_URL}/alpha/${code}`,
  REGION: (region: string): string => `${API_URL}/region/${region}`
}
