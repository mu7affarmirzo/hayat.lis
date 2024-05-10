import { Stack } from '@mui/material'
import { AntibioticGroupsTable } from '@/entities/antibiotic-groups'
import { Button, Icon } from '@/shared/ui'

export const AntibioticGroups = () => {
  return (
    <AntibioticGroupsTable
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
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
              height: '32px',
            }}
          >
            Изменить
          </Button>
        </Stack>
      }
    />
  )
}
