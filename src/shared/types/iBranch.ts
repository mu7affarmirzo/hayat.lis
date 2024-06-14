export interface IBranch {
  id: number
  created_by: string
  modified_by: string
  name: string
  created_at: string
  modified_at: string
  organization: number
}

export type IBranchList = IBranch[]
