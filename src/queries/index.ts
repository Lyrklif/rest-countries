import { useQuery } from '@tanstack/vue-query'
import { API, CACHE_TIME, fetcher } from './helpers'
import type { Ref } from 'vue'

export const useCountryQueries = () => {
  const getAllCountries = () => {
    const { isPending, isFetching, isError, data, error, refetch } = useQuery({
      queryKey: ['all_countries'],
      queryFn: () => fetcher(API.ALL),
      staleTime: CACHE_TIME,
      gcTime: CACHE_TIME
    })

    return {
      isPending,
      isFetching,
      isError,
      data,
      error
    }
  }

  const searchCountryByName = (name: Ref<string>) => {
    const { refetch, isPending, isFetching, isError, data, error } = useQuery({
      queryKey: ['country_by_name', name],
      queryFn: () => fetcher(API.NAME(name.value)),
      enabled: false
    })

    return {
      isPending,
      isFetching,
      isError,
      data,
      error,
      refetch
    }
  }

  const filterByRegion = (region: Ref<string>) => {
    const { refetch, isPending, isFetching, isError, data, error } = useQuery({
      queryKey: ['region', region],
      queryFn: () => fetcher(API.REGION(region.value)),
      staleTime: CACHE_TIME,
      gcTime: CACHE_TIME,
      enabled: false
    })

    return {
      isPending,
      isFetching,
      isError,
      data,
      error,
      refetch
    }
  }

  const getCountryByCode = (code: Ref<string>) => {
    const { isPending, isFetching, isError, data, error } = useQuery({
      queryKey: ['country_by_code', code],
      queryFn: () => fetcher(API.CODE(code.value)),
      staleTime: CACHE_TIME,
      gcTime: CACHE_TIME
    })

    return {
      isPending,
      isFetching,
      isError,
      data,
      error
    }
  }

  return {
    getAllCountries,
    searchCountryByName,
    filterByRegion,
    getCountryByCode
  }
}
