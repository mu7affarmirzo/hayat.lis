import { Stack, Typography } from '@mui/material'
import { BasicTabs, Button, Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { useResearchTab } from '../../model/useResearchTab'
import { ByWorkPlaces } from '../ByWorkPlacesTab'
import { GroupResearch } from '../ResearchTab'
import { SelectionResearch } from './SelectionResearch'

export const FilterTabs = () => {
  const {
    register,
    control,
    handleSubmit,
    onSubmit,
    handleChange,
    handleChangeInput,
    users,
    handleClickSearch,
    selectedUser,
    isLoadingUsers,
    researchGroupProps,
  } = useResearchTab()

  return (
    <Stack
      maxWidth={'400px'}
      width={'400px'}
      p={'10px'}
      sx={{ backgroundColor: colors.bgLightGray }}
    >
      <Stack
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        spacing={'10px'}
      >
        <BasicTabs
          panels={[
            {
              item: <GroupResearch {...researchGroupProps} />,
              label: 'Исследования',
            },
            {
              item: <ByWorkPlaces {...researchGroupProps} />,
              label: 'По раб. местам',
            },
          ]}
        />
        <SelectionResearch
          isLoadingUsers={isLoadingUsers}
          selectedUser={selectedUser}
          handleChange={handleChange}
          handleChangeInput={handleChangeInput}
          users={users}
          register={register}
          control={control}
          handleClickSearch={handleClickSearch}
        />
        <Button
          type="submit"
          variant="contained"
          color={'primary'}
          fullWidth
          sx={{
            display: 'flex',
            gap: '8px',
            boxShadow: 'none',
            background: colors.mainBlue,
          }}
        >
          <Icon type="refresh" />
          <Typography fontWeight={500}>Обновить</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
