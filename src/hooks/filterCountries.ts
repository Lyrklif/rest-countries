import type { ComputedRef, Ref } from 'vue'
import { computed } from 'vue'

type TFiltered = {
  filteredList: Ref<Country[]>
}

export const useFilterCountries = (
  list: Ref<Country[] | undefined>,
  name: Ref<string>,
  region: Ref<string>
): TFiltered => {
  const filteredByRegion: ComputedRef<Country[]> = computed(() => {
    if (!list.value) return []
    if (!region.value) return list.value

    const regionFilter: string = region.value.toLowerCase()
    return list.value.filter((country: Country) => country.region.toLowerCase() === regionFilter)
  })

  const filteredList: ComputedRef<Country[]> = computed(() => {
    if (!filteredByRegion.value.length) return []

    const nameFilter: string = name.value.toLowerCase()
    if (!nameFilter) return filteredByRegion.value

    return filteredByRegion.value.filter((country: Country) =>
      country.name.official.toLowerCase().includes(nameFilter)
    )
  })

  return {
    filteredList
  }
}
