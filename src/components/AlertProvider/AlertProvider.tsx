import { Snackbar, Alert, AlertColor } from '@mui/material'
import { createContext, useContext, useState } from 'react'

interface Alert {
  alertType: AlertColor
  content: string
}

interface AlertWithId extends Alert {
  id: number
}

type PushAlert = (alert: Alert) => void
const AlertContext = createContext<PushAlert>(() => {
  throw 'Not implemented'
})
const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextValue, setContextValue] = useState<AlertWithId[]>([])
  const pushAlert = (alert: Alert) => {
    const alertId = Date.now()
    setContextValue([...contextValue, { ...alert, id: alertId }])
    setTimeout(
      () => setContextValue((cur) => cur.filter(({ id }) => id != alertId)),
      2000
    )
  }
  return (
    <AlertContext.Provider value={pushAlert}>
      {contextValue.map((alert, index) => (
        <Snackbar
          key={index}
          open={true}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity={alert.alertType} sx={{ width: '100%' }}>
            {alert.content}
          </Alert>
        </Snackbar>
      ))}
      <>{children}</>
    </AlertContext.Provider>
  )
}

export const useAlert = () => useContext(AlertContext)

export default AlertProvider
