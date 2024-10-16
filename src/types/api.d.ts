type Country = {
  name: {
    common: string
    official: string
  }
  population: number
  capital: string[]
  region: string
  subregion: string
  flags: {
    alt: string
    png: string
    svg: string
  }
  tld: string[] // domain
  languages: {
    [key: string]: string
  }
  borders: {
    [key: string]: string
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  fifa: string
  cioc: string
  cca3: string
}
