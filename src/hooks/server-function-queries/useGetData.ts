import { useSuspenseQuery, useQuery } from '@tanstack/react-query'
import { use, useEffect, useState } from 'react'
import { useLoading } from '../../components/PageLoadingProvider/LoadingProvider'

const useGetData = <DataType, ParamsType>({
  fn,
  fallbackValue,
  params,
  queryKey = []
}: {
  fn: (params: ParamsType) => Promise<DataType>
  fallbackValue?: DataType
  params: ParamsType
  queryKey: string[]
}) => {
  const { data, refetch, status } = useSuspenseQuery({
    queryKey: queryKey,
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
  // const [data, setData] = useState<DataType>()
  // const [isLoading, setIsLoading] = useLoading()
  // console.log(isLoading)
  // const doAction = async () => {
  //   setIsLoading(true)
  //   const result = await fn(params)
  //   setData(result)
  //   setIsLoading(false)
  // }
  // useEffect(() => {
  //   void doAction()
  // }, [])
  // useEffect(() => {
  //   setIsLoading(true)
  // }, [data])
  return { data: data as DataType, status, refetch } // Guaranteed not undefined by react-query
}

export default useGetData

export { useQuery }
