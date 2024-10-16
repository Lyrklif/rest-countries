export const getCountryCode = (country: Country) => {
  const { fifa, cioc, cca3 } = country

  return fifa || cioc || cca3
}
