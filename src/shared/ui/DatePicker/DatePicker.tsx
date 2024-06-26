import cs from 'classnames'
import { type InputHTMLAttributes } from 'react'

export const DatePicker = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props

  return (
    <input
      {...rest}
      className={cs(
        'border-borderGray border h-[30px] rounded px-[4px] py-[4px]',
        props.className
      )}
      type="date"
    />
  )
}
