import { Stack } from '@mui/material'
import { Button as CustomBtn, CustomModal, Icon } from '@/shared/ui'
import { RelatedResearch } from './RelatedResearch'

interface RelatedResearchModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const RelatedResearchModal = (props: RelatedResearchModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Связанные исследования"
      onClose={handleClose}
      open={isOpen}
      maxWidth={'700px'}
    >
      <>
        <RelatedResearch />
        <Stack
          direction="row"
          justifyContent={'space-between'}
          py={'8px'}
          spacing={'10px'}
          width={'100%'}
        >
          <CustomBtn
            startIcon={<Icon type="file-contract" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Добавить
          </CustomBtn>
          <CustomBtn
            startIcon={<Icon type="minus" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Удалить
          </CustomBtn>
          <CustomBtn
            disabled
            startIcon={<Icon type="pen" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Изменить
          </CustomBtn>
          <CustomBtn
            disabled
            startIcon={<Icon type="check" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Сохранить
          </CustomBtn>
          <CustomBtn
            disabled
            startIcon={<Icon type="xmark" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Отмена
          </CustomBtn>
        </Stack>
      </>
    </CustomModal>
  )
}
