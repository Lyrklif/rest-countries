type Country = {
  name: {
    common: string
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
}
