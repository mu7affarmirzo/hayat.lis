const navItems = [
  { name: 'Реестр заказов', id: 1, slug: '/register-orders', type: 'link' },
  { name: 'Сортировка', id: 92939292, slug: '/sorting', type: 'link' },
  // { name: 'Постановка', id: 2232, slug: '/staging', type: 'link' },
  { name: 'Результаты', id: 38838, slug: '/results', type: 'link' },
  // {
  //   name: 'Справочники',
  //   id: 2,
  //   slug: '/handbook',
  //   type: 'menu',
  //   menu: [
  //     {
  //       menuTitle: 'Услуги',
  //       withSubmenu: true,
  //       link: '/handbook/services',
  //       subMenu: [
  //         {
  //           subMenuName: 'Исследования',
  //           subMenuLink: '/handbook/services/research',
  //         },
  //         {
  //           subMenuName: 'Пакеты исследований',
  //           subMenuLink: '/handbook/services/research-packs',
  //         },
  //         {
  //           subMenuName: 'Дополнительные услуги',
  //           subMenuLink: '/handbook/services/extra-services',
  //         },
  //         {
  //           subMenuName: 'Группы исследований',
  //           subMenuLink: '/handbook/services/research-groups',
  //         },
  //         {
  //           subMenuName: 'Группы тестов',
  //           subMenuLink: '/handbook/services/research-groups',
  //         },
  //       ],
  //     },
  //     {
  //       menuTitle: 'Виды контейнеров',
  //       withSubmenu: false,
  //       link: '/handbook/container-types',
  //     },
  //     {
  //       menuTitle: 'Прочие',
  //       withSubmenu: true,
  //       link: '/handbook/others',
  //       subMenu: [
  //         {
  //           subMenuName: 'Палитра цветов',
  //           subMenuLink: '/handbook/others/color-palette',
  //         },
  //         {
  //           subMenuName: 'Виды штативов',
  //           subMenuLink: '/handbook/others/tripod-types',
  //         },
  //         {
  //           subMenuName: 'Временные регламенты',
  //           subMenuLink: '/handbook/others/temporary-regulations',
  //         },
  //         {
  //           subMenuName: 'Группы антибиотиков',
  //           subMenuLink: '/handbook/others/antibiotic-groups',
  //         },
  //         {
  //           subMenuName: 'Антибиотики',
  //           subMenuLink: '/handbook/others/antibiotics',
  //         },
  //       ],
  //     },
  //     {
  //       menuTitle: 'Типы реагентов',
  //       withSubmenu: false,
  //       link: '/handbook/reagent-types',
  //     },
  //     {
  //       menuTitle: 'Биоматериалы',
  //       withSubmenu: false,
  //       link: '/handbook/biomaterial',
  //     },
  //     {
  //       menuTitle: 'Примечания',
  //       withSubmenu: false,
  //       link: '/handbook/notes',
  //     },
  //     {
  //       menuTitle: 'Единицы измерений',
  //       withSubmenu: false,
  //       link: '/handbook/units-of-measure',
  //     },
  //     {
  //       menuTitle: 'Кто делал забор',
  //       withSubmenu: false,
  //       link: '/handbook/who-made-fence',
  //     },
  //   ],
  // },
  // { name: 'Утилиты', id: 3222, slug: '/utilities', type: 'link' },
  // { name: 'Контейнер', id: 325322, slug: '/container', type: 'link' },
]

type NavItems = NavItem[]

interface NavItem {
  name: string
  id: number
  slug: string
  type: string
  menu?: Menu[]
}

interface Menu {
  menuTitle: string
  withSubmenu: boolean
  link: string
  subMenu?: SubMenu[]
}

interface SubMenu {
  subMenuName: string
  subMenuLink: string
}

export { navItems, type NavItems, type Menu, type SubMenu, type NavItem }
