import { useQuery } from '@tanstack/vue-query'
import { API, CACHE_TIME, fetcher } from './helpers'

export const fetchCountries = () => {
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
