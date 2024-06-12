import { zodResolver } from '@hookform/resolvers/zod'
import { LoadingButton } from '@mui/lab'
import {
  TextField,
  Stack,
  Typography,
  useTheme,
  Checkbox,
  Link,
  FormControlLabel,
} from '@mui/material'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '@/shared/model'
// import { Button } from '@/shared/ui'
import { loginThunk } from '../../model/login'
import {
  type LoginFormSchema,
  loginFormSchema,
} from '../../model/loginFormSchema'

type Props = {
  onComplete?: () => void
}

export function LoginForm(props: Props) {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const {
    setError,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const theme = useTheme()

  const onSubmitHandler = useCallback(
    ({ email, password }: LoginFormSchema) => {
      setIsLoading(true)
      dispatch(loginThunk({ email, password }))
        .unwrap()
        .then(() => props.onComplete?.())
        .catch((error) => {
          console.error({ error })
          setError('email', { type: 'server', message: error.message })
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    []
  )

  console.log({ errors })

  return (
    <Stack
      // maxWidth={600}
      width="120%"
      spacing={'30px'}
      p={'10px'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack
        alignItems={'center'}
        maxWidth={600}
        alignSelf={'center'}
        spacing={'-4px'}
      >
        <Typography
          component={'h1'}
          fontSize={36}
          fontWeight={300}
          fontFamily={'Inter'}
          lineHeight={'54px'}
        >
          Вход в систему LIS
        </Typography>
        <Typography
          component={'h2'}
          fontSize={28}
          fontWeight={800}
          lineHeight={'42px'}
          fontFamily={'Inter'}
          letterSpacing={'-2%'}
          color={theme.status.mainRed}
        >
          HAYAT MEDICAL CENTER
        </Typography>
      </Stack>
      <form
        className={
          'w-full max-w-[600px] px-[10px] flex flex-col gap-[30px] items-center'
        }
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          // type="email"
          {...register('email')}
          error={!!errors.email?.message}
          fullWidth
          label={'Логин'}
        />
        <TextField
          type="password"
          {...register('password')}
          fullWidth
          error={!!errors.password?.message}
          label={'Пароль'}
        />
        <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Запомните пароль"
          />
          <Link
            fontWeight={500}
            textTransform={'uppercase'}
            sx={{
              textDecoration: 'none',
              ':hover': { textDecoration: 'none' },
              cursor: 'pointer',
            }}
          >
            Забыли пароль ?
          </Link>
        </Stack>
        <LoadingButton
          type="submit"
          loading={isLoading}
          variant="contained"
          size="large"
          fullWidth
        >
          Вход в систему
        </LoadingButton>
      </form>
    </Stack>
  )
}
