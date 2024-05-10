import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import { Button as CustomBtn, Icon, TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { useManageModals } from '../../model/useManageModals'
import { AdditionalRequiredFieldsModal } from '../AdditionalFieldsModal'
import { DeadlinesByRegionModal } from '../DeadlinesByRegionModal'
import { PathologyFormulaModal } from '../PathologyFormulaModal'
import { PlacementsModal } from '../PlacementsModal'
import { QuestionnaireSetupModal } from '../QuestionnaireSetupModal'
import { RelatedResearchModal } from '../RelatedResearchModal'
import { RequiredFieldsModal } from '../RequiredFieldsModal'
import { ResearchAccessibilityModal } from '../ResearchAccessibilityModal'
import { ResearchContainersModal } from '../ResearchContainersModal'
import { ResearchPanelsModal } from '../ResearchPanelsModal'
import { ResultsTemplateModal } from '../ResultsTemplateModal'

export const Parameters = () => {
  const {
    handleOpenPathologyModal,
    handleClosePathologyModal,
    isPathologyModalOpen,
    handleCloseQuestionnaireModal,
    handleOpenQuestionnaireModal,
    isQuestionnaireModalOpen,
    handleCloseRequiredFieldsModal,
    handleOpenRequiredFieldsModal,
    isRequiredFieldsModalOpen,
    handleCloseAccessibilityModal,
    handleOpenAccessibilityModal,
    isAccessibilityModalOpen,
    handleCloseAdditionalFieldsModal,
    handleOpenAdditionalFieldsModal,
    isAdditionalFieldsModalOpen,
    handleOpenRelatedResearchModal,
    handleCloseRelatedResearchModal,
    isRelatedResearchModalOpen,
    handleOpenResearchContainersModal,
    handleCloseResearchContainersModal,
    isResearchContainersModalOpen,
    handleClosePlacementsModal,
    handleOpenPlacementsModal,
    isPlacementsModalOpen,
    handleOpenResultsTemplateModal,
    handleCloseResultsTemplateModal,
    isResultsTemplateModalOpen,
    handleOpenResearchPanelsModal,
    handleCloseResearchPanelsModal,
    isResearchPanelsModalOpen,
    handleOpenDeadlinesByRegionModal,
    handleCloseDeadlinesByRegionModal,
    isDeadlinesByRegionModalOpen,
  } = useManageModals()

  return (
    <Stack width={'100%'} spacing={'5px'}>
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ flex: 1 }}
          label="Номер"
          id="Номер"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <CustomBtn disabled>Выбрать</CustomBtn>
      </Stack>
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ flex: 1 }}
          label="Название"
          id="Название"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <CustomBtn>
          <Icon type="files" />
        </CustomBtn>
      </Stack>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <TextInput
          sx={{ width: '290px' }}
          label="Короткое название"
          id="Короткое название"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <TextInput
          sx={{ width: '290px' }}
          label="Атрибут"
          id="Атрибут"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
            width: 'auto',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
      </Stack>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <TextInput
          sx={{ width: '450px' }}
          label="Группа"
          id="Группа"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <TextInput
          sx={{ width: '150px' }}
          label="Себестоимость"
          id="Себестоимость"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
      </Stack>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <TextInput
          sx={{ width: '450px' }}
          label="Подгруппа"
          id="Подгруппа"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
      </Stack>
      <Stack
        width={'100%'}
        direction={'row'}
        justifyContent={'space-between'}
        spacing={'10px'}
      >
        <Stack direction={'row'} spacing={'10px'}>
          <Stack spacing={'10px'}>
            <TextInput
              sx={{ width: '450px' }}
              label="Основное раб. место"
              id="Основное раб. место"
              direction="row"
              spacing="10px"
              containerSx={{
                alignItems: 'center',
              }}
              labelStyle={{ width: '250px', textAlign: 'right' }}
            />
            <TextInput
              sx={{ width: '450px' }}
              label="Резервное раб. место"
              id="Резервное раб. место"
              direction="row"
              spacing="10px"
              containerSx={{
                alignItems: 'center',
              }}
              labelStyle={{ width: '250px', textAlign: 'right' }}
            />
          </Stack>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            sx={{
              background: colors.bgLightGray,
              justifyContent: 'space-between',
              borderRadius: '4px',
            }}
          >
            <FormControlLabel
              sx={{ m: 0 }}
              value="female"
              control={<Radio sx={{ p: '4px' }} />}
              label=""
            />
            <FormControlLabel
              sx={{ m: 0 }}
              value="male"
              control={<Radio sx={{ p: '4px' }} />}
              label=""
            />
          </RadioGroup>
        </Stack>
        <Stack spacing={'10px'} alignItems={'flex-end'}>
          <TextInput
            sx={{ width: '150px', textAlign: 'right' }}
            label="Порядок"
            id="Порядок"
            direction="row"
            spacing="10px"
            containerSx={{
              alignItems: 'center',
              width: 'auto',
            }}
            labelStyle={{ textAlign: 'right' }}
          />
          <CustomBtn onClick={handleOpenPathologyModal} sx={{ width: '240px' }}>
            Патология
          </CustomBtn>
        </Stack>
      </Stack>
      <Stack
        spacing={'10px'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack spacing={'10px'} direction={'row'}>
          <TextInput
            sx={{ width: '270px' }}
            label="Трудозатраты лаборанта"
            id="Трудозатраты лаборанта"
            direction="row"
            spacing="10px"
            containerSx={{
              alignItems: 'center',
              width: 'auto',
            }}
            labelStyle={{ width: '250px', textAlign: 'right' }}
          />
          <CustomBtn sx={{ width: '170px' }}>Трудозатраты по ПП</CustomBtn>
        </Stack>
        <CustomBtn
          onClick={handleOpenQuestionnaireModal}
          sx={{ width: '240px' }}
        >
          Настройка анкеты
        </CustomBtn>
      </Stack>
      <Stack
        spacing={'10px'}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <TextInput
          sx={{ width: '270px', textAlign: 'right' }}
          label="Трудозатраты специалиста"
          id="Трудозатраты специалиста"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
            width: 'auto',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <CustomBtn
          onClick={handleOpenAccessibilityModal}
          sx={{ width: '240px' }}
        >
          Доступность исследований
        </CustomBtn>
      </Stack>
      <Stack
        spacing={'10px'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack spacing={'10px'} direction={'row'} alignItems={'center'}>
          <TextInput
            sx={{ width: '270px' }}
            label="Срок выполнения"
            id="Срок выполнения"
            direction="row"
            spacing="10px"
            containerSx={{
              alignItems: 'center',
              width: 'auto',
            }}
            labelStyle={{ width: '250px', textAlign: 'right' }}
          />
          <Typography variant="body2" height={'max-content'}>
            (сутки)
          </Typography>
        </Stack>
        <CustomBtn
          onClick={handleOpenRequiredFieldsModal}
          sx={{ width: '240px' }}
        >
          Обязательные поля
        </CustomBtn>
      </Stack>
      <Stack
        spacing={'10px'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack spacing={'10px'} direction={'row'} alignItems={'center'}>
          <TextInput
            sx={{ width: '270px' }}
            label="Срок выполнения СИТО"
            id="Срок выполнения СИТО"
            direction="row"
            spacing="10px"
            containerSx={{
              alignItems: 'center',
              width: 'auto',
            }}
            labelStyle={{ width: '250px', textAlign: 'right' }}
          />
          <Typography variant="body2" height={'max-content'}>
            (сутки)
          </Typography>
        </Stack>
        <CustomBtn
          onClick={handleOpenAdditionalFieldsModal}
          sx={{ width: '240px' }}
        >
          Доп. обязательные поля
        </CustomBtn>
      </Stack>
      <Stack
        spacing={'10px'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <FormControl
          sx={{ width: '530px' }}
          component="fieldset"
          variant="standard"
        >
          <FormGroup sx={{ gap: '5px' }}>
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Допустимость Cito"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Готовность. если введены только обяз. рз—ты"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Авто Валидация"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Авто Валидация результатов вне нормы"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Неопределенное количество тестов"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Активный"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Чувствительность тестов к антибиотикам"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Интерпретируемое"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="НДС"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Выполняется в выходные дни"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Привязка врача"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Ветеринарная услуга"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Отправлять результаты вне нормы"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Вкл. в расчет скидки по дисконтной карте"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Требовать привязку файлов при валидации"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Использовать привязку тестов V2"
            />
            <FormControlLabel
              sx={{ marginTop: '30px' }}
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Печатать результаты на двух языках"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Является срочным"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Отправлять рекламные уведомления"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Является аллергеном"
            />
          </FormGroup>
        </FormControl>
        <Stack spacing={'10px'} alignItems={'flex-end'}>
          <CustomBtn
            onClick={handleOpenResearchContainersModal}
            sx={{ width: '240px' }}
          >
            Контейнеры
          </CustomBtn>
          <CustomBtn
            onClick={handleOpenRelatedResearchModal}
            sx={{ width: '240px' }}
          >
            Связанные исследования
          </CustomBtn>
          <CustomBtn
            onClick={handleOpenPlacementsModal}
            sx={{ width: '240px' }}
          >
            Размещения
          </CustomBtn>
          <CustomBtn
            onClick={handleOpenResultsTemplateModal}
            sx={{ width: '240px' }}
          >
            Шаблон результатов
          </CustomBtn>
          <CustomBtn sx={{ width: '240px' }}>Параметры печати</CustomBtn>
          <CustomBtn
            onClick={handleOpenResearchPanelsModal}
            sx={{ width: '240px' }}
          >
            Панели
          </CustomBtn>
          <CustomBtn
            onClick={handleOpenDeadlinesByRegionModal}
            sx={{ width: '240px' }}
          >
            Сроки по регионам
          </CustomBtn>
          <Stack spacing={'10px'} alignItems={'flex-end'} mt={'40px'}>
            <FormControl component="fieldset" variant="standard">
              <FormGroup sx={{ flexDirection: 'row', gap: '5px' }}>
                <FormControlLabel
                  control={<Checkbox sx={{ py: 0 }} />}
                  labelPlacement="start"
                  label="Исп. в лаб. калькуляторе"
                />
                <FormControlLabel
                  control={<Checkbox sx={{ py: 0 }} />}
                  labelPlacement="start"
                  label="Графика"
                />
                <FormControlLabel
                  control={<Checkbox sx={{ py: 0 }} />}
                  labelPlacement="start"
                  label="Отображать на сайте"
                />
              </FormGroup>
            </FormControl>
            <TextInput
              sx={{ width: '330px' }}
              label="Альтернативный код"
              id="Альтернативный код"
              direction="row"
              spacing="10px"
              containerSx={{
                alignItems: 'center',
                width: 'auto',
              }}
              labelStyle={{ textAlign: 'right' }}
            />
            <FormControl component="fieldset" variant="standard">
              <FormGroup sx={{ gap: '10px' }}>
                <FormControlLabel
                  control={<Checkbox sx={{ py: 0 }} />}
                  labelPlacement="start"
                  label="Является лабораторной услугой"
                />
                <Stack alignItems={'flex-end'} direction={'row'}>
                  <FormControlLabel
                    control={<Checkbox sx={{ py: 0 }} />}
                    labelPlacement="start"
                    label="Печатать в рабочем листе"
                  />
                  <FormControlLabel
                    control={<Checkbox sx={{ py: 0 }} />}
                    labelPlacement="start"
                    label="Своя оферта"
                  />
                </Stack>
              </FormGroup>
            </FormControl>
            <TextInput
              sx={{ width: '300px' }}
              label="Идентификационный код"
              id="Идентификационный код"
              direction="row"
              spacing="10px"
              containerSx={{
                alignItems: 'center',
                width: 'auto',
              }}
              labelStyle={{ textAlign: 'right' }}
            />
          </Stack>
        </Stack>
      </Stack>
      <PathologyFormulaModal
        isOpen={isPathologyModalOpen}
        handleClose={handleClosePathologyModal}
        handleSubmit={handleClosePathologyModal}
      />
      <QuestionnaireSetupModal
        isOpen={isQuestionnaireModalOpen}
        handleClose={handleCloseQuestionnaireModal}
        handleSubmit={handleCloseQuestionnaireModal}
      />
      <RequiredFieldsModal
        isOpen={isRequiredFieldsModalOpen}
        handleClose={handleCloseRequiredFieldsModal}
        handleSubmit={handleCloseRequiredFieldsModal}
      />
      <ResearchAccessibilityModal
        isOpen={isAccessibilityModalOpen}
        handleClose={handleCloseAccessibilityModal}
        handleSubmit={handleCloseAccessibilityModal}
      />
      <AdditionalRequiredFieldsModal
        isOpen={isAdditionalFieldsModalOpen}
        handleClose={handleCloseAdditionalFieldsModal}
        handleSubmit={handleCloseAdditionalFieldsModal}
      />
      <ResearchContainersModal
        isOpen={isResearchContainersModalOpen}
        handleClose={handleCloseResearchContainersModal}
        handleSubmit={handleCloseResearchContainersModal}
      />
      <RelatedResearchModal
        isOpen={isRelatedResearchModalOpen}
        handleClose={handleCloseRelatedResearchModal}
        handleSubmit={handleCloseRelatedResearchModal}
      />
      <PlacementsModal
        isOpen={isPlacementsModalOpen}
        handleClose={handleClosePlacementsModal}
        handleSubmit={handleClosePlacementsModal}
      />
      <ResultsTemplateModal
        isOpen={isResultsTemplateModalOpen}
        handleClose={handleCloseResultsTemplateModal}
        handleSubmit={handleCloseResultsTemplateModal}
      />
      <ResearchPanelsModal
        isOpen={isResearchPanelsModalOpen}
        handleClose={handleCloseResearchPanelsModal}
        handleSubmit={handleCloseResearchPanelsModal}
      />
      <DeadlinesByRegionModal
        isOpen={isDeadlinesByRegionModalOpen}
        handleClose={handleCloseDeadlinesByRegionModal}
        handleSubmit={handleCloseDeadlinesByRegionModal}
      />
    </Stack>
  )
}
