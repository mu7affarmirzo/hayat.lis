import { Stack } from '@mui/material'
import { AntibioticsTable, AntibioticsContainer } from '@/entities/antibiotics'
import { EditAntibiotic } from '@/features/antibiotics'
import { Button, Icon } from '@/shared/ui'
import { useAntibiotics } from '../model/useAntibiotics'

export const Antibiotics = () => {
  const { isEditing, setIsEditing } = useAntibiotics()
  return (
    <AntibioticsContainer
      packagesTableActions={
        <Stack direction={'row'} spacing={'10px'}>
          <Button
            startIcon={<Icon type="plus" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
              height: '32px',
            }}
          >
            Добавить
          </Button>
          <Button
            startIcon={<Icon type="minus" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
              height: '32px',
            }}
          >
            Удалить
          </Button>
          <Button
            startIcon={<Icon type="pen" />}
            onClick={() => setIsEditing(true)}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
              height: '32px',
            }}
          >
            Изменить
          </Button>
          <Button
            startIcon={<Icon type="check" />}
            onClick={() => {
              setIsEditing(false)
            }}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
              height: '32px',
            }}
          >
            Сохранить
          </Button>
          <Button
            startIcon={<Icon type="xmark" />}
            onClick={() => {
              setIsEditing(false)
            }}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
              height: '32px',
            }}
          >
            Отмена
          </Button>
        </Stack>
      }
    >
      {isEditing ? <EditAntibiotic /> : <AntibioticsTable />}
    </AntibioticsContainer>
  )
}
