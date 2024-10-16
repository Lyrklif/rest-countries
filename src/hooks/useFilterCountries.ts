import type { ComputedRef, Ref } from 'vue'
import { computed } from 'vue'

export const useFilterCountries = (
  list: Ref<Country[] | undefined>,
  name: Ref<string>,
  region: Ref<string>
) => {
  const filteredList: ComputedRef<Country[]> = computed(() => {
    if (!list.value) return []
    if (!region.value && !name.value) return list.value

    const regionFilter: string = region.value.toLowerCase()
    const nameFilter: string = name.value.toLowerCase()

    return list.value.filter((country: Country) => {
      const localRegion: string = country.region.toLowerCase()
      const localName: string = country.name.official.toLowerCase()

      const isEqualRegion: boolean = regionFilter ? localRegion === regionFilter : true
      const isEqualName: boolean = nameFilter ? localName.includes(nameFilter) : true

      return isEqualRegion && isEqualName
    })
  })

  return {
    filteredList
  }
}
