import { type MouseEvent, useState } from 'react'

export const useAutocomplete = () => {
  // boolean value to determine if the user has right clicked
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedItem, setSelectedItem] = useState<number | undefined>()
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return {
    open,
    handleClick,
    handleClose,
    anchorEl,
    selectedItem,
    setSelectedItem,
  }
}
