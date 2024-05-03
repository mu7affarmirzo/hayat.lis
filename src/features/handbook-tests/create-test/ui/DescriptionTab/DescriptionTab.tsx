import { Stack } from '@mui/material'
import { TextInput, Button as CustomBtn, Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

export const DescriptionTab = () => {
  return (
    <Stack
      border={`1px solid ${colors.bgHoverGray}`}
      borderTop={`1px solid #8E8E8E`}
      //   direction={'row'}
      width={'100%'}
      p={'10px'}
      height={'845px'}
      spacing={'10px'}
    >
      <TextInput
        id="Описание:"
        minRows={9}
        maxRows={9}
        multiline
        sx={{ width: '600px' }}
        label="Описание:"
      />
      <Stack direction={'row'} spacing={'10px'}>
        <CustomBtn sx={{ width: '350px' }}>
          Редактировать примечание к исследованию
        </CustomBtn>
        <CustomBtn>
          <Icon type="files" />
        </CustomBtn>
      </Stack>
      <Stack direction={'row'} spacing={'10px'}>
        <CustomBtn disabled sx={{ width: '350px' }}>
          Редактировать примечание к антибиотикам
        </CustomBtn>
        <CustomBtn disabled>
          <Icon type="files" />
        </CustomBtn>
      </Stack>
      <TextInput
        id="Примечание при отсутствии результатов:"
        minRows={9}
        maxRows={9}
        multiline
        sx={{ width: '600px' }}
        label="Примечание при отсутствии результатов:"
      />
      <TextInput
        id="Сообщение при сортировке (до 150 символов):"
        minRows={6}
        maxRows={6}
        multiline
        sx={{ width: '600px' }}
        label="Сообщение при сортировке (до 150 символов):"
      />
    </Stack>
  )
}
