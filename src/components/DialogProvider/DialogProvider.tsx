'use client'
import { Box, Container, Typography } from '@mui/material'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const context = createContext<[boolean, (value: boolean) => void]>([
  false,
  () => {}
])

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
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

export default DialogProvider
export const useDialog = () => useContext(context)
