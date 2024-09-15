import { useQuery } from '@tanstack/vue-query'
import { API, CACHE_TIME, fetcher } from './helpers'

export const useCountryQueries = () => {
  const getAllCountries = () => {
    const { isPending, isFetching, isError, data, error } = useQuery({
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

  const searchCountryByName = (name: string) => {
    const { isPending, isFetching, isError, data, error } = useQuery({
      queryKey: ['country_by_name', name],
      queryFn: () => fetcher(API.NAME(name))
    })

    return {
      isPending,
      isFetching,
      isError,
      data,
      error
    }
  }

  const filterByRegion = (region: string) => {
    const { isPending, isFetching, isError, data, error } = useQuery({
      queryKey: ['region', region],
      queryFn: () => fetcher(API.REGION(region)),
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

  const getCountryByCode = (code: string) => {
    const { isPending, isFetching, isError, data, error } = useQuery({
      queryKey: ['country_by_code', code],
      queryFn: () => fetcher(API.CODE(code)),
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
