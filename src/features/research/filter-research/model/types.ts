export type GroupsResearch = GroupResearch[]

export interface GroupResearch {
  id: number
  name: string
  lab_research: LabResearch[]
}

export interface LabResearch {
  id: number
  name: string
  price: number
  number: unknown
  alternative_code: unknown
  short_name: unknown
  attribute: unknown
  deadline: unknown
  deadline_cito: unknown
  cito: boolean
  is_active: boolean
  category: number
  branch: number
  sub_category: unknown
  main_working_station: unknown
  backup_working_station: unknown
}
