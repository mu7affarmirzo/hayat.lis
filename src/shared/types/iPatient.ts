export type IPatientsRoot = IPatientRoot[]

export interface IPatientRoot {
  patient: Patient
  created_at: string
  order_number: string
  lab: number
  branch_name: number
  results: Result[]
}

export interface Patient {
  id: number
  f_name: string
  mid_name: string
  l_name: string
  email: string
  date_of_birth: string
  home_phone_number: string
  mobile_phone_number: string
  address: string
  additional_info: number
  is_active: boolean
  doc_type: string
  doc_number: string
  issued_data: string
  INN: string
  country: string
  last_visit_at: string
  created_at: string
  modified_at: string
  gender: boolean
  information_source: number
  organization: number
  patient_group: unknown[]
}

export interface Result {
  id: number
  norma: unknown
  container_code: string
  result: string
  result_date: string
  status: unknown
  test_status: string
  created_at: string
  modified_at: string
  ordered_lab_research: number
  lab_research_test: number
  container: number
  created_by: number
  modified_by: number
}

export interface IEditContainer {
  id: number
  container_id: number
  container_code: string
}
