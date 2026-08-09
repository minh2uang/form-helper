'use client'
import { Box, Container, Typography } from '@mui/material'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
const context = createContext<[boolean, (value: boolean) => void]>([
  false,
  () => {}
])

const GlobalSubmittingProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <context.Provider value={[isLoading, setIsLoading]}>
      {children}
    </context.Provider>
  )
}

export default GlobalSubmittingProvider
export const useLoading = () => useContext(context)
