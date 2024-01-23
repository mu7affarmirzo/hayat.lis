/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvgProps } from '../types/iconTypes'

interface INav {
  name?: string
  title: string
  path?: string
  mainPath?: string
  firtsItemTitle?: string
  lastItemTitle?: string
  lastItemPath?: string
  lastItemIcon?: (props: SvgProps) => JSX.Element

  subMenu?: Array<{
    sectionName?: string
    sectionItems?: Array<any>
  }>
}
export const NavBarDropdowns: Array<INav> = [
  {
    name: 'Реестр заказов',
    title: 'Реестр заказов',
    path: '/',
    mainPath: 'registration',
    subMenu: [],
  },
]
