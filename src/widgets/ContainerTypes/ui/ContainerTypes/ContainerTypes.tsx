import { Stack } from '@mui/material'
import {
  ContainerTypesContainer,
  ContainerTypesTable,
} from '@/entities/container-types'
import { EditContainer } from '@/features/container-types/edit-container'
import { Button, Icon } from '@/shared/ui'
import { useContainerTypes } from '../../model/useContainerTypes'

export const ContainerTypes = () => {
  const { isEditing, setIsEditing } = useContainerTypes()
  return (
    <ContainerTypesContainer
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
            onClick={() => {
              setIsEditing(true)
            }}
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
      {isEditing ? <EditContainer /> : <ContainerTypesTable />}
    </ContainerTypesContainer>
  )
}
