import React from 'react'
import { Navigate } from 'react-router-dom'
import RegistrationView from '../views/home/registration/registrationView'
import LoginView from '../views/auth/loginView'

type IRouting = {
  path: string
  component: React.ReactNode
  global?: boolean
}

type MyGroupType = {
  [key: string]: IRouting[]
}

export const RoutingData: MyGroupType = {
  NoAuth: [
    {
      path: '/login',
      component: <LoginView />,
      global: true,
    },
  ],
  Admin: [
    {
      path: '/',
      component: <Navigate to="/registration" replace />,
      global: true,
    },
    {
      path: '/registration',
      component: <RegistrationView />,
    },
  ],
}
