import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material'
import { Button as CustomButton, CustomModal, Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { useFilterResearch } from '../../model/useFilterResearch'

export const FilterResearch = () => {
  const {
    handleCloseSamplingModal,
    handleOpenSamplingModal,
    isOpenSamplingModal: isOpen,
  } = useFilterResearch()
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
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="green"
                  control={<Radio />}
                  label="Невалидированные (Зеленые)"
                />
                <FormControlLabel
                  value="blue"
                  control={<Radio />}
                  label="Валидированные(Синие)"
                />
                <FormControlLabel value="all" control={<Radio />} label="Все" />
                <FormControlLabel
                  value="not-ready"
                  control={<Radio />}
                  label="Неготовые + Невалидированные"
                />
                <FormControlLabel
                  value="all-norms"
                  control={<Radio />}
                  label="Вне нормы"
                />
                <FormControlLabel
                  value="Просроченные по постановке"
                  control={<Radio />}
                  label="Просроченные по постановке"
                />
                <FormControlLabel
                  value="Просроченные по готовности"
                  control={<Radio />}
                  label="Просроченные по готовности"
                />
                <FormControlLabel
                  value="Просроченные по валидации"
                  control={<Radio />}
                  label="Просроченные по валидации"
                />
                <FormControlLabel
                  value="Не готовые, но с результатами"
                  control={<Radio />}
                  label="Не готовые, но с результатами"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <FormGroup
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
          </FormGroup>
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
