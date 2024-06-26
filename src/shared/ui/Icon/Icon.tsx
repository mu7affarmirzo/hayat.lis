import cn from 'classnames'
import React from 'react'
import css from './Icon.module.css'

export type IconType = 'logo' | 'x' | 'loader' | 'arrow-right'

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
