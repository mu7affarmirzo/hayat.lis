import cn from 'classnames'
import React from 'react'
import css from './Icon.module.css'

export type IconType =
  | 'logo'
  | 'x'
  | 'loader'
  | 'arrow-right'
  | 'close-circle'
  | 'refresh'
  | 'qr-code'
  | 'note-plus'
  | 'xmark'
  | 'search-normal'
  | 'file-contract'
  | 'circle-check'
  | 'check'
  | 'plus'
  | 'minus'
  | 'pen'
  | 'files'
  | 'dots-horizontal'
  | 'book-open'

export type Props = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  type: IconType
  iconClassName?: string
}

export function Icon(props: Props) {
  return (
    <div
      className={cn(
        css.root,
        { [css.root_clickable]: Boolean(props.onClick) },
        props.className
      )}
      onClick={props.onClick}
    >
      <div
        className={cn(css.icon, props.iconClassName)}
        style={{ backgroundImage: `url("/images/${props.type}.svg")` }}
      />
    </div>
  )
}
