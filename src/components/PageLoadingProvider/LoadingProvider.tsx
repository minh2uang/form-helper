'use client'
import { Box, Container, Typography } from '@mui/material'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
const context = createContext<[boolean, (value: boolean) => void]>([
  false,
  () => {}
])

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const pathname = usePathname()
  useEffect(() => {
    setIsLoading(false)
  }, [pathname])
  console.log(isLoading)
  return (
    <context.Provider value={[isLoading, setIsLoading]}>
      {children}
    </context.Provider>
  )
}

export const LoadableChildren: React.FunctionComponent<{
  children: JSX.Element
}> = ({ children }) => {
  const [isLoading] = useLoading()
  return isLoading ? (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
        width: 1,
        display: 'flex'
      }}
    >
      <Typography>Loading....</Typography>
    </Box>
  ) : (
    children
  )
}
export default LoadingProvider
export const useLoading = () => useContext(context)
