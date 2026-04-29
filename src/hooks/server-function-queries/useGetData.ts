import { useSuspenseQuery } from '@tanstack/react-query'

const useGetData = <DataType, ParamsType>({
  fn,
  fallbackValue,
  params
}: {
  fn: (params: ParamsType) => Promise<DataType>
  fallbackValue?: DataType
  params: ParamsType
}) => {
  const { data, refetch, status } = useSuspenseQuery({
    queryKey: [fn.name, params],
    queryFn: async (): Promise<DataType> => {
      try {
        const result: DataType = await fn(params)
        return result
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
