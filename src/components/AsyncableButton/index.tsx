import { Button, ButtonProps } from '@mui/material'
import { useState } from 'react'

interface AsyncableButtonProps extends ButtonProps {
  onClick: () => Promise<void> | void
}
const AsyncableButton: React.FC<AsyncableButtonProps> = ({
  onClick,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const overRiddenOnClick = async () => {
    setIsLoading(true)
    try {
      const clickResult = onClick()
      clickResult instanceof Promise && (await clickResult)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Button
      onClick={overRiddenOnClick}
      loading={isLoading}
      {...props}
      sx={{ textTransform: 'none', ...props.sx }}
    />
  )
}

export default AsyncableButton
