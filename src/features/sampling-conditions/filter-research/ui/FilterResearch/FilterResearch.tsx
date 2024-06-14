import {
  Button,
  // Checkbox,
  FormControl,
  FormControlLabel,
  // FormGroup,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import { type Dispatch, type SetStateAction } from 'react'
import { Button as CustomButton, CustomModal, Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { useFilterResearch } from '../../model/useFilterResearch'

interface FilterResearchProps {
  choice: string
  setChoice: Dispatch<SetStateAction<string>>
}

export const FilterResearch = (props: FilterResearchProps) => {
  const { choice, setChoice } = props
  const {
    handleCloseSamplingModal,
    handleOpenSamplingModal,
    isOpenSamplingModal: isOpen,
    choices,
    isLoading,
    handleChange,
  } = useFilterResearch({ setChoice, choice })

  return (
    <>
      <CustomButton
        onClick={handleOpenSamplingModal}
        startIcon={<Icon type="file-contract" />}
        sx={{ width: 'max-content', alignItems: 'center' }}
      >
        ВАЛИДИРОВАННЫЕ
      </CustomButton>
      <CustomModal
        open={isOpen}
        maxWidth={'700px'}
        title="Условия выборки"
        onClose={handleCloseSamplingModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Stack width={'100%'} spacing={'10px'}>
            {isLoading ? (
              <Typography>Загрузка...</Typography>
            ) : (
              <FormControl
                sx={{
                  p: '10px',
                  borderRadius: '4px',
                  border: `1px solid ${colors.borderGray}`,
                  background: colors.bgHoverGray,
                }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="controlled-radio-buttons-group"
                  value={choice}
                  onChange={handleChange}
                >
                  {choices?.map((ch) => (
                    <FormControlLabel
                      key={ch}
                      value={ch}
                      control={<Radio />}
                      label={ch}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          </Stack>
          {/* <FormGroup
            sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}
          >
            <FormControlLabel
              sx={{ flex: 1, width: 'max-content' }}
              control={<Checkbox defaultChecked />}
              label={`Скрыть поле "Интерпретация'`}
            />
            <FormControlLabel
              sx={{ flex: 1 }}
              control={<Checkbox />}
              label="Скрыть выбракованные"
            />
          </FormGroup> */}
          <Stack
            sx={{ background: colors.bgLightGray }}
            direction="row"
            spacing={'16px'}
            justifyContent={'flex-end'}
            p={'20px 24px'}
            width="100%"
          >
            <Button
              onClick={handleCloseSamplingModal}
              variant="contained"
              color="success"
            >
              Установить
            </Button>
            <Button
              onClick={handleCloseSamplingModal}
              variant="contained"
              color="inherit"
            >
              Отменить
            </Button>
          </Stack>
        </>
      </CustomModal>
    </>
  )
}
