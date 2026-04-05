'use client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

interface CustomQueryClientProviderProps {
    children: JSX.Element
}

const queryClient = new QueryClient()
const CustomQueryClientProvider: React.FC<CustomQueryClientProviderProps> = ({children}) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
export default CustomQueryClientProvider