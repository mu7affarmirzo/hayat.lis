import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { selectIsAuthorized } from '@/entities/session'
import {
  AntibioticGroupsPage,
  AntibioticsPage,
  BiomaterialPage,
  ContainerTypesPage,
  HandbookResearchPacksPage,
  HandbookResearchPage,
  ReagentTypesPage,
  TemporaryRegulationsPage,
  UnitsOfMeasurePage,
} from '@/pages/handbook'
import { TripodTypesPage } from '@/pages/handbook/ui/Others/TripodTypes/Page'
import { LoginPage } from '@/pages/login'
import { RegisterOrdersPage } from '@/pages/register-orders'
import { ResearchPage } from '@/pages/research/ui/Page/Page'
import { useAppSelector } from '@/shared/model'
import { ColorPalette } from '@/widgets/ColorPalette'
import { baseLayout } from './layouts/baseLayout'

type GuestGuardProps = {
  children?: ReactElement
}

function GuestGuard({ children }: GuestGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized)

  if (!isAuthorized) return <Navigate to="/login" />

  return children
}

type AuthGuardProps = {
  children: ReactElement
}

function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized)

  if (isAuthorized) return <Navigate to="/" />

  return children
}
export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/*',
      element: <Navigate to={'/register-orders'} />,
    },
    {
      path: '/login',
      element: (
        <AuthGuard>
          <LoginPage />
        </AuthGuard>
      ),
    },
    {
      element: <GuestGuard>{baseLayout}</GuestGuard>,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/*',
          element: <Navigate to={'/register-orders'} />,
        },
        {
          path: 'register-orders',
          element: <RegisterOrdersPage />,
        },
        {
          path: 'sorting',
          element: <ResearchPage />,
        },
        {
          path: 'handbook',
          children: [
            {
              path: 'services',
              children: [
                { path: 'research', element: <HandbookResearchPage /> },
                {
                  path: 'research-packs',
                  element: <HandbookResearchPacksPage />,
                },
              ],
            },
            { path: 'container-types', element: <ContainerTypesPage /> },
            {
              path: 'biomaterial',
              element: <BiomaterialPage />,
            },
            {
              path: 'reagent-types',
              element: <ReagentTypesPage />,
            },
            {
              path: 'units-of-measure',
              element: <UnitsOfMeasurePage />,
            },
            {
              path: 'others',
              children: [
                { path: 'color-palette', element: <ColorPalette /> },
                {
                  path: 'temporary-regulations',
                  element: <TemporaryRegulationsPage />,
                },
                {
                  path: 'antibiotic-groups',
                  element: <AntibioticGroupsPage />,
                },
                {
                  path: 'antibiotics',
                  element: <AntibioticsPage />,
                },
                {
                  path: 'tripod-types',
                  element: <TripodTypesPage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ])
