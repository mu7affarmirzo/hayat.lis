import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { TestTubes } from '@/shared/assets/index'
import { Select, Button, TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

export const EditContainer = () => {
  const [file, setFile] = useState(TestTubes)
  const fileInputRef = useRef(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    if (e.target?.files?.[0]) {
      setFile(URL.createObjectURL(e.target.files[0]))
    }
  }

  const selectFile = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    fileInputRef?.current?.click()
  }

  return (
    <Stack
      padding={'10px'}
      height={'calc(100vh - 132px)'}
      border={`1px solid ${colors.borderLightGray}`}
      direction={'row'}
    >
      <Stack
        border={`1px solid ${colors.darkerGray}`}
        borderRadius={'4px'}
        p={'8px 10px'}
        spacing={'5px'}
        height={'max-content'}
        sx={{ background: colors.bgHoverGray }}
      >
        <Typography>Фото</Typography>
        <img
          src={file}
          alt={'Probe'}
          width={255}
          className="rounded border border-darkerGray h-[500px] object-cover"
        />
        <input
          style={{ display: 'none' }}
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleChange}
        />
        <Button
          onClick={selectFile}
          sx={{
            justifySelf: 'flex-end',
            width: 'max-content',
            alignSelf: 'flex-end',
          }}
        >
          Загрузить
        </Button>
      </Stack>
      <Stack py={'50px'} spacing={'10px'} maxWidth={'860px'} width={'100%'}>
        <TextInput
          sx={{ flex: 1 }}
          label="Наименование"
          id="Наименование"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <TextInput
          sx={{ width: '150px' }}
          label="Код"
          id="Код"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <TextInput
          sx={{ flex: 1 }}
          label="Сокр.наименование"
          id="Сокр.наименование"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <Select
          disabled
          containerSx={{
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
          }}
          labelSx={{ width: '250px', textAlign: 'right' }}
          data={[]}
          sx={{ flex: 1 }}
          label="Цвет"
        />
        <TextInput
          sx={{ width: '150px' }}
          label="Сокр.наименование"
          id="Сокр.наименование"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <FormControlLabel
          sx={{
            width: 'max-content',
            '& .MuiFormControlLabel-label': {
              width: '250px',
              textAlign: 'right',
            },
          }}
          control={<Checkbox sx={{ py: 0 }} />}
          labelPlacement="start"
          label="Архив"
        />
        <FormControlLabel
          sx={{
            width: 'max-content',
            '& .MuiFormControlLabel-label': {
              width: '250px',
              textAlign: 'right',
            },
          }}
          control={<Checkbox sx={{ py: 0 }} />}
          labelPlacement="start"
          label="Является группой"
        />
        <FormControlLabel
          sx={{
            width: 'max-content',
            '& .MuiFormControlLabel-label': {
              width: '250px',
              textAlign: 'right',
            },
          }}
          control={<Checkbox sx={{ py: 0 }} />}
          labelPlacement="start"
          label="Аликвотируемый"
        />
        <Select
          disabled
          containerSx={{
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
          }}
          labelSx={{ width: '250px', textAlign: 'right' }}
          data={[]}
          sx={{ flex: 1 }}
          label="Группа"
        />
        <TextInput
          sx={{ width: '150px' }}
          label="Суффикс"
          id="Суффикс"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <TextInput
          sx={{ flex: 1 }}
          label="Номенклатурное название"
          id="Номенклатурное название"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
      </Stack>
    </Stack>
  )
}
