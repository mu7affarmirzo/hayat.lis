const handbookGroups = [
  {
    menuTitle: '01 Гормоны',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '02 CLIA',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '03 ТОРЧ',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '04 Микроскопия',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '05 ПЦР',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '06 Биохимия',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '07 Бак. посев',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '08 Экспресс-тест',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '10 Прием',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '11 Диагностика',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '111',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: '12 другие',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
  {
    menuTitle: 'Аллергия',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
      { subMenuName: 'другие' },
    ],
  },
  {
    menuTitle: 'Гемостаз',
    subMenu: [
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
      { subMenuName: 'другие' },
    ],
  },
  {
    menuTitle: 'Утиль',
    subMenu: [
      { subMenuName: 'другие' },
      { subMenuName: 'Коагулограмма' },
      { subMenuName: 'Общие клинические анализы' },
    ],
  },
]

type HandbookGroups = HandbookGroup[]

interface HandbookGroup {
  menuTitle: string
  subMenu: SubMenu[]
}

interface SubMenu {
  subMenuName: string
}

export { handbookGroups, type HandbookGroups, type HandbookGroup, type SubMenu }
