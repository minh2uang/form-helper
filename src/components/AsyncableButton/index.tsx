import { Button, ButtonProps } from '@mui/material'
import { useState } from 'react'

interface AsyncableButtonProps extends ButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => Promise<void> | void
}
const AsyncableButton: React.FC<AsyncableButtonProps> = ({
  onClick,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const overRiddenOnClick = async (event: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true)
    try {
      const clickResult = onClick(event)
      clickResult instanceof Promise && (await clickResult)
    } catch (error) {
      console.log(error)
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
