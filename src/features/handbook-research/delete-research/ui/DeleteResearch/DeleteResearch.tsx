import { Button, Icon } from '@/shared/ui'

export const DeleteResearch = () => {
  return (
    <Button
      startIcon={<Icon type="minus" />}
      sx={{
        width: 'max-content',
        alignItems: 'center',
        textTransform: 'uppercase',
      }}
    >
      Удалить
    </Button>
  )
}
