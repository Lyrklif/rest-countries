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

    const filter: string = region.value.toLowerCase()
    return list.value.filter((country: Country) => country.region.toLowerCase() === filter)
  })

  const filteredList: ComputedRef<Country[]> = computed(() => {
    if (!filteredByRegion.value.length) return []

    const filter: string = name.value.toLowerCase()
    if (!filter) return filteredByRegion.value

    return filteredByRegion.value.filter((country: Country) =>
      country.name.official.toLowerCase().includes(filter)
    )
  })

  return {
    filteredList
  }
}
