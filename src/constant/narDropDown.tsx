/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BoxArchiveIcon,
  ClipBoardTick,
  Clipboard,
  ListCheckIcon,
  SortDataIcon,
} from '../assets/icons/icons'
import { SvgProps } from '../types/iconTypes'

interface IDropdownItem {
  icon: React.ComponentType<SvgProps>
  text: string
  sideBarText?: string
  active?: boolean
  path: string
}

interface ITab {
  name: string
  title: string
  path: string
  mainPath: string
  dropdown?: IDropdownItem[]
  subMenu?: any[] //
}
interface IRoleNavs {
  [key: string]: ITab[]
}

export const NavBarDropdowns: IRoleNavs = {
  Admin: [
    {
      name: 'Реестр заказов',
      title: 'Реестр заказов',
      path: '/registration',
      mainPath: '/registration',
      dropdown: [
        {
          icon: Clipboard,
          text: 'Реестр',
          path: 'registr',
        },
        {
          icon: SortDataIcon,
          text: 'Сортировка',
          path: 'sort',
        },
        {
          icon: ListCheckIcon,
          text: 'Постановка',
          path: 'stag',
        },
        {
          icon: ClipBoardTick,
          text: 'Результаты',
          path: 'result',
        },
        {
          icon: BoxArchiveIcon,
          text: 'Контейнеры',
          path: 'container',
        },
      ],
    },
    {
      name: 'Сортировка',
      title: 'Сортировка',
      path: '/sorting',
      mainPath: '/sorting',
      subMenu: [],
    },
    {
      name: 'Постановка',
      title: 'Постановка',
      path: '/staging',
      mainPath: '/staging',
      subMenu: [],
    },
    {
      name: 'Результаты',
      title: 'Результаты',
      path: '/results',
      mainPath: '/results',
      subMenu: [],
    },
    {
      name: 'Справочники',
      title: 'Справочники',
      path: '/directories',
      mainPath: '/directories',
      subMenu: [],
    },
    {
      name: 'Утилиты',
      title: 'Утилиты',
      path: '/utilities',
      mainPath: '/utilities',
      subMenu: [],
    },
    {
      name: 'Контейнер',
      title: 'Контейнер',
      path: '/containers',
      mainPath: '/containers',
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
