import { Stack } from '@mui/material'
import { ColorPalette } from '@/widgets/ColorPalette'

export const ColorPalettePage = () => {
  return (
    <Stack sx={{ height: 'calc(100vh - 76px)' }}>
      <ColorPalette />
    </Stack>
  )
}
