import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

// abstract away error handling
// skip retrieving "user" everywhere

const useGetData = <DataType>(
  fn: () => Promise<DataType>,
  fallbackValue?: DataType
) => {
  const { data, refetch, status } = useSuspenseQuery({
    queryKey: [fn.name],
    queryFn: async (): Promise<DataType> => {
      try {
        return await fn()
      } catch (err) {
        if (!!fallbackValue) {
          return fallbackValue as DataType
        }
        throw err
      }
    }
  })

  return { data: data as DataType, status, refetch } // Guaranteed not undefined by react-query
}

export default useGetData
