import { forwardRef } from 'react'
import DatePicker, { type ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props extends ReactDatePickerProps {}

export const DateInput = forwardRef(function DateInput(props: Props, ref) {
  const { className, ...rest } = props
  return (
    <DatePicker
      className={'border border-borderGray rounded ml-0 ' + className}
      enableTabLoop={false}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref={ref}
      {...rest}
    />
  )
})
