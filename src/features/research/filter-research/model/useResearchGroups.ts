import { useGroupListQuery } from '../api/researchGroupApi'

export const useResearchGroups = () => {
  const { data } = useGroupListQuery()

  return { researchGroup: data }
}
