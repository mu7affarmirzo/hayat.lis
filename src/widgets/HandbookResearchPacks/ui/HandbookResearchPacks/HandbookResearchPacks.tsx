import { Stack } from '@mui/material'
import { PackagesContainer, PackagesTable } from '@/entities/packages'
import { ResearchInPackageTable } from '@/entities/research-in-package'
import { EditPackage } from '@/features/package/edit-package'
import { SearchPackage } from '@/features/package-code/search-package'
import { Button, Icon } from '@/shared/ui'
import { useResearchPacks } from '../../model/useResearchPacks'

export const HandbookResearchPacks = () => {
  const { isEditing, setIsEditing } = useResearchPacks()

  return (
    <Stack p={'5px'} spacing={'5px'}>
      <SearchPackage />
      <PackagesContainer
        packagesTableActions={
          <Stack pb={'10px'} direction={'row'} spacing={'10px'}>
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
      >
        {isEditing ? (
          <EditPackage />
        ) : (
          <PackagesTable setIsEditing={setIsEditing} />
        )}
      </PackagesContainer>
      <ResearchInPackageTable
        packagesTableActions={
          <Stack pb={'10px'} direction={'row'} spacing={'10px'}>
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
    </Stack>
  )
}
