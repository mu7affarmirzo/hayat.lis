import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavItem = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  return {
    open,
    handleClick,
    handleClose,
    anchorEl,
    navigate,
  }
}
