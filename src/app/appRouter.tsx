import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
// import { featureToggleLoader } from '@/entities/featureToggle'
import { selectIsAuthorized } from '@/entities/session'
// import { CartPage } from '@/pages/cart'
// import { CategoryPage } from '@/pages/category'
import { LoginPage } from '@/pages/login'
// import { MainPage } from '@/pages/main'
// import { ProductPage } from '@/pages/product'
// import { WishlistPage } from '@/pages/wishlist'
import { RegisterOrdersPage } from '@/pages/register-orders'
import { useAppSelector } from '@/shared/model'
// import { appStore } from './appStore'
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
      //   loader: async () => {
      //     return await featureToggleLoader(appStore.dispatch)
      //   },
      children: [
        {
          path: '/*',
          element: <Navigate to={'/register-orders'} />,
        },
        {
          path: '/register-orders',
          element: <RegisterOrdersPage />,
        },
        {
          path: '/sorting',
          element: <RegisterOrdersPage />,
        },
      ],
    },
  ])
