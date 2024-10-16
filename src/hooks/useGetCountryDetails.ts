import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import { getCountryCode } from '@/helpers/getCountryCode'

export const useGetCountryDetails = (list: Ref<Country[]>) => {
  const code = ref<string>('')

  const setCode = (value: string) => {
    code.value = value
  }

  const countryDetails: ComputedRef<Country | null> = computed(() => {
    if (!list.value?.length || !code.value) return null

    const trimmedCode: string = code.value.trim().toLowerCase()

    return (
      list.value.find((country: Country) => {
        const code = getCountryCode(country)

        return code.toLowerCase() === trimmedCode
      }) || null
    )
  })

  return {
    countryDetails,
    setCode
  }
}
