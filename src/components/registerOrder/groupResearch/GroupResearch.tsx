import { Box, Button, Typography } from '@mui/material'
import GroupTable from '../table/GroupTable'
import AutocompleteInput from '../../autocompleteInput/AutocompleteInput'
import RadioForm from '../../RadioForm'
import DefaultInput from '../../defaultInput/DefaultInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CloseIcon, SearchIcon } from '../../../assets/icons/icons'
import DefaultCheckbox from '../../checkBox/defaultCheckBox'

interface IFormInput {
  phone: string
  email: string
  company: string
  manager: string
}

const data = [
  {
    id: 0,
    title: 'Все исследования',
  },

  {
    id: 1,
    title: '02 CLIA',
  },
  {
    id: 2,
    title: '03 ТОРЧ',
  },
  {
    id: 3,
    title: '04 Микроскопия',
  },
  {
    id: 4,
    title: '05 ПЦР',
  },
  {
    id: 5,
    title: '06 Биохимия',
  },
  {
    id: 6,
    title: '07 Бак. посев',
  },
  {
    id: 7,
    title: '08 Экспресс-тест',
  },
  {
    id: 8,
    title: '12 Другие',
  },
  {
    id: 9,
    title: 'Аллергия',
  },
  {
    id: 10,
    title: 'Гемостаз',
  },
]

const radioForm = [
  {
    id: 0,
    value: 'gentle',
    label: 'Регистрация',
  },
  {
    id: 1,
    value: 'bed',
    label: 'Постановка',
  },
  {
    id: 2,
    value: 'tonic',
    label: 'Принятие в лаб.',
  },
]

const radioForm2 = [
  {
    id: 0,
    value: 'gentle',
    label: 'Плательщик',
  },
  {
    id: 1,
    value: 'bed',
    label: 'ЛПУ',
  },
]

const top100Films = [{ label: '04.10. 2023' }]

function GroupResearch() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <Box className=" bg-[#f5f5f5] flex-col  gap-1  w-[380px]border overflow-hidden ">
      <Box className="bg-[#64B6F7] p-[5px]">
        <Typography>Группа/Исследование</Typography>
      </Box>
      <Box className="bg-[#fff] w-[365px] h-[300px] overflow-scroll mb-[12px]">
        {data.map((item: any) => {
          return <GroupTable title={item.title} />
        })}
      </Box>
      <Box className="bg-[#64B6F7] p-[5px]">
        <Typography>Выборка</Typography>
      </Box>
      <Box className="bg-[#f5f5f5] w-[365px] h-[500px] overflow-scroll mb-[12px]">
        <Box className=" flex mt-[10px] justify-between">
          <AutocompleteInput
            lable="С"
            data={top100Films}
            lableStyle="text-[#000]"
            containerStyle={'w-[45%] items-center  h-[30px]'}
            inputStyle="w-[100%] bg-[#fff]"
          />
          <AutocompleteInput
            lable="по"
            data={top100Films}
            lableStyle="text-[#000]"
            containerStyle={'w-[45%] items-center  h-[30px]'}
            inputStyle="w-[100%] bg-[#fff]"
          />
        </Box>
        <Box className="">
          <RadioForm data={radioForm} />
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} className="my-[10px]">
          <DefaultInput
            register={register}
            inputType={'manager'}
            containerStile="w-[100%]"
          />
          <DefaultInput
            lable="№ Заказа"
            register={register}
            inputType={'manager'}
            containerStile="w-[100%] mt-[10px]"
          />
          <Box className="flex mt-[10px] gap-[5px] items-center">
            <DefaultInput
              lable="ФИО"
              register={register}
              inputType={'manager'}
              containerStile="w-[100%]"
            />
            <Button className="h-[40px] bg-[#fff] border mt-[25px]">
              <SearchIcon width={30} />
            </Button>
            <Button className="h-[40px] bg-[#fff] border mt-[25px]">
              <CloseIcon />
            </Button>
          </Box>
          <Box className="flex w-[100%] mt-[10px] items-center">
            <DefaultInput
              lable="Контейнер"
              register={register}
              inputType={'manager'}
            />
            <DefaultCheckbox
              style=" items-center w-[50%] mt-[25px]"
              label="По Заказу"
            />
          </Box>
          <DefaultCheckbox label="Только с привязанными контейнерами" />
          <DefaultInput
            lable="Лабораторный №"
            register={register}
            inputType={'manager'}
            containerStile="w-[100%] mt-[10px]"
          />
          <Box className="">
            <RadioForm data={radioForm2} />
          </Box>
          <AutocompleteInput
            data={top100Films}
            lableStyle="text-[#000]"
            containerStyle={'w-[100%] items-center mt-[10px] h-[30px]'}
            inputStyle="w-[100%] bg-[#fff]"
          />
        </form>
      </Box>
    </Box>
  )
}

export default GroupResearch
