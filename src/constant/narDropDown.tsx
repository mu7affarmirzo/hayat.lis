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
interface IRoleNavs {
  [key: string]: Array<INav>
}

export const NavBarDropdowns: IRoleNavs = {
  Admin: [
    {
      name: 'Реестр заказов',
      title: 'Реестр заказов',
      path: '/registration',
      mainPath: 'registration',
      subMenu: [],
    },
    {
      name: 'Сортировка',
      title: 'Сортировка',
      path: '/sorting',
      mainPath: 'sorting',
      subMenu: [],
    },
    {
      name: 'Постановка',
      title: 'Постановка',
      path: '/staging',
      mainPath: 'staging',
      subMenu: [],
    },
    {
      name: 'Результаты',
      title: 'Результаты',
      path: '/results',
      mainPath: 'results',
      subMenu: [],
    },
    {
      name: 'Справочники',
      title: 'Справочники',
      path: '/directories',
      mainPath: 'directories',
      subMenu: [],
    },
    {
      name: 'Утилиты',
      title: 'Утилиты',
      path: '/utilities',
      mainPath: 'utilities',
      subMenu: [],
    },
    {
      name: 'Контейнер',
      title: 'Контейнер',
      path: '/container',
      mainPath: 'container',
      subMenu: [],
    },
  ],

  Manager: [
    {
      name: 'Реестр заказов',
      title: 'Реестр заказов',
      path: '/',
      mainPath: 'registration_manager',
      subMenu: [],
    },
  ],
}
