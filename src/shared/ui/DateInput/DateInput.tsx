import DatePicker, { type ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props extends ReactDatePickerProps {}

export const DateInput = (props: Props) => {
  const { className, ...rest } = props
  return (
    <DatePicker
      className={'border border-borderGray rounded ' + className}
      {...rest}
    />
  )
}
