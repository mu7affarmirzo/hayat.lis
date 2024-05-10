import { Stack } from '@mui/material'
import { SpillTable } from '@/entities/spill'
import { TemporaryRegulationsTable } from '@/entities/temporary-regulations'
import { Button, Icon } from '@/shared/ui'

export const TemporaryRegulations = () => {
  return (
    <>
      <TemporaryRegulationsTable />
      <SpillTable
        spillTableActions={
          <Stack
            direction={'row'}
            spacing={'10px'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} spacing={'10px'} pb={'6px'}>
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
            </Stack>
            <Button
              startIcon={<Icon type="check" />}
              sx={{
                width: 'max-content',
                alignItems: 'center',
                textTransform: 'uppercase',
                height: '32px',
              }}
            >
              Сохранить
            </Button>
          </Stack>
        }
      />
    </>
  )
}
