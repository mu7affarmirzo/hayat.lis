import GroupResearch from '../groupResearch/GroupResearch'

const ROUTES = {
  dashboard: [
    {
      name: 'groupresearch',
      defaultPath: 'groupresearch',
      paths: [
        {
          path: 'groupresearch',
          element: GroupResearch,
        },
      ],
    },
  ],
}
export default ROUTES
