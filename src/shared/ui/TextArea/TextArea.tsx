import { type GridDirection, Stack, type SxProps } from '@mui/material'
import cls from 'classnames'
import { type HTMLProps } from 'react'

interface AreaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string
  containerSx?: SxProps
  spacing?: string
  direction?: GridDirection
}

export const TextArea = (props: AreaProps) => {
  const {
    direction,
    spacing = '10px',
    containerSx,
    label,
    className,
    id,
    ...rest
  } = props
  return (
    <Stack spacing={spacing} direction={direction} sx={{ ...containerSx }}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        className={cls('border-borderLightGray rounded border', className)}
        {...rest}
      />
    </Stack>
  )
}
