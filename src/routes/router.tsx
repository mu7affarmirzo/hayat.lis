import React from 'react'
import { Navigate } from 'react-router-dom'
import LoginView from '../views/auth/loginView'
import RegistrationManager from '../views/manager/registrManager/registerationM'
import Utilities from '../views/home/utilities'
import Sorting from '../views/home/sorting'
import Container from '../views/home/container'
import Directories from '../views/home/directories'
import Results from '../views/home/results'
import Staging from '../views/home/staging'
import Registration from '../views/home/registration'

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
      component: <Registration />,
    },
    {
      path: '/sorting',
      component: <Sorting />,
    },
    {
      path: '/staging',
      component: <Staging />,
    },
    {
      path: '/results',
      component: <Results />,
    },
    {
      path: '/directories',
      component: <Directories />,
    },
    {
      path: '/containers',
      component: <Container />,
    },
    {
      path: '/utilities',
      component: <Utilities />,
    },
  ],
  Manager: [
    {
      path: '/',
      component: <Navigate to="/registration_manager" replace />,
      global: true,
    },
    {
      path: '/registration_manager',
      component: <RegistrationManager />,
    },
  ],
}
