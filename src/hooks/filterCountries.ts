import type { Ref } from 'vue'
import { computed } from 'vue'

export const useFilterCountries = (
  list: Ref<Country[] | undefined>,
  name: Ref<string>,
  region: Ref<string>
): { filteredList: Ref<Country[]> } => {
  const filteredList = computed(() => {
    if (!list.value) return []

    return list.value.filter((country: Country) => {
      const hasName: boolean = country.name.official
        .toLowerCase()
        .includes(name.value.toLowerCase())
      const hasRegion: boolean = region.value ? country.region.toLowerCase() === region.value : true

      return hasName && hasRegion
    })
  })

  return {
    filteredList
  }
}
