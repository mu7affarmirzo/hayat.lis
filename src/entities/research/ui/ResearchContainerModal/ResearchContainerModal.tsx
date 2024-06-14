import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import { type ReactNode } from 'react'
import ContainerImg from '@/shared/assets/images/container.svg'
import { type IPatientsRoot } from '@/shared/types'
import { CustomModal } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

interface ModalProps {
  currentResearchId?: number
  isOpenContainerModal: boolean
  handleCloseContainerModal: () => void
  containerInfoTable?: ReactNode
  researchList?: IPatientsRoot
}

export const ResearchContainerModal = (props: ModalProps) => {
  const {
    currentResearchId,
    isOpenContainerModal,
    handleCloseContainerModal: handleClose,
    containerInfoTable,
    researchList,
  } = props

  const currentResearch = researchList?.results?.find(
    (rItem) => rItem.lab === currentResearchId
  )
  if (currentResearchId === undefined) {
    return (
      <Modal
        open={!!isOpenContainerModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p>Error</p>
      </Modal>
    )
  }

  return (
    <CustomModal
      open={!!isOpenContainerModal}
      onClose={handleClose}
      title={
        currentResearch &&
        `Контейнеры заказа: ${currentResearch?.patient?.f_name} ${currentResearch?.patient?.l_name}`
      }
    >
      <>
        <Stack
          spacing={'4px'}
          sx={{ backgroundColor: colors.bgLightGray }}
          p={'4px'}
          width={'100%'}
          direction={'row'}
          border={`1px solid ${colors.borderGray}`}
        >
          <Stack width={'100%'}>
            <Typography variant="h6">Привязка контейнеров</Typography>
            <Stack spacing={'4px'} direction={'row'}>
              <Stack
                borderRadius={'5px'}
                border={`1px solid ${colors.borderGray}`}
              >
                <Box p={'2px 10px'} sx={{ backgroundColor: '#DDDDDD' }}>
                  <Typography variant="body2">Фото</Typography>
                </Box>
                <img
                  width={257}
                  height={401}
                  className="object-cover"
                  src={ContainerImg}
                  alt="test container (tube)"
                />
              </Stack>
              {containerInfoTable}
            </Stack>
          </Stack>
        </Stack>
        <Stack py="8px" width={'100%'} alignItems={'flex-end'}>
          <Button
            sx={{ textTransform: 'uppercase', boxShadow: 'none' }}
            variant="contained"
            color="inherit"
            onClick={handleClose}
          >
            Отмена
          </Button>
        </Stack>
      </>
    </CustomModal>
  )
}
