import { SvgProps } from '../../../types/iconTypes'

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
    name: 'Исследования',
    title: 'Исследования',
    path: '/src/components/registerOrder/groupResearch',
    mainPath: 'groupresearch',
    subMenu: [],
  },
]
