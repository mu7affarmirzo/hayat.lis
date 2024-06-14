import { type Patient } from '@/shared/types'

export const mapUsers = (users: Patient[]) => {
  return users.map((i) => ({
    label: i.f_name || '' + i.mid_name || '' + i.l_name || '',
    value: i.id,
  }))
}
