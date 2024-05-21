import { Stack } from '@mui/material'
import {
  UnitsOfMeasureContainer,
  UnitsOfMeasureTable,
} from '@/entities/units-of-measure'
import { EditUnitsOfMeasure } from '@/features/units-of-measure/edit-units-of-measure'
import { Button, Icon } from '@/shared/ui'
import { useUnitsOfMeasure } from '../model/useUnitsOfMeasure'

export const UnitsOfMeasure = () => {
  const { isEditing, setIsEditing } = useUnitsOfMeasure()
  return (
    <UnitsOfMeasureContainer
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
      {isEditing ? <EditUnitsOfMeasure /> : <UnitsOfMeasureTable />}
    </UnitsOfMeasureContainer>
  )
}
