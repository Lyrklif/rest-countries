import type { ComputedRef, Ref } from 'vue'
import { computed } from 'vue'
import { getCountryCode } from '@/helpers/getCountryCode'

type TFiltered = {
  countryDetails: Ref<Country | undefined>
}

export const useGetCountryDetails = (
  list: Ref<Country[] | undefined>,
  countryName: string
): TFiltered => {
  const countryDetails: ComputedRef<Country | undefined> = computed(() => {
    if (!list.value) return undefined

    const nameFilter: string = countryName.trim().toLowerCase()

    return list.value.find((country: Country) => {
      const code = getCountryCode(country)

      return code.toLowerCase() === nameFilter
    })
  })

  return {
    countryDetails
  }
}
