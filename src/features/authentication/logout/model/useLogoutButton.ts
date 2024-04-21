import { useState } from 'react'
import { useAppDispatch } from '@/shared/model'
import { logoutThunk } from './logout'

export const useLogoutButton = () => {
  const dispatch = useAppDispatch()
  const [profileOpen, setProfileOpen] = useState<null | HTMLElement>(null)

  const onConfirmLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(logoutThunk()).unwrap()
  }

  return {
    onConfirmLogout,
    dispatch,
    profileOpen,
    setProfileOpen,
  }
}
