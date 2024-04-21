import { Stack } from '@mui/material'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginForm } from '@/features/authentication/login'
import TestTubes from '@/shared/assets/images/test-tubes.svg'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const onComplete = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    navigate(location.state?.returnUrl ?? '/')
  }, [navigate])

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      flexWrap={'nowrap'}
      sx={{ height: '100vh' }}
    >
      <LoginForm onComplete={onComplete} />
      <img
        src={TestTubes}
        className="h-100% max-w-[787px] object-cover"
        alt="Test tubes"
      />
    </Stack>
  )
}
