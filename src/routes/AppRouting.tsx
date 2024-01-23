/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { RoutingData } from './router'

import React, { useState } from 'react'
import Header from '../components/header/header'

export const MainContainer = styled.div`
  display: flex;
`

type Props = {
  role: 'NoAuth' | 'Admin'
}

const AppRouting = () => {
  const [role, setRole] = useState<Props['role']>('Admin')

  return (
    <>
      {role !== 'NoAuth' ? (
        <>
          <Header />
          <MainContainer className=" overflow-hidden relative min-h-[calc(100vh-76px)] ">
            {/* <SideBar changeHeaerTab={changeTopTab} /> */}
            <div className="w-[calc(100vw-280px)] h-full ">
              <Routes>
                {RoutingData[role].map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Route
                        key={i}
                        path={item.path}
                        element={item.component}
                      />
                      {item.global && (
                        <Route
                          path="*"
                          element={<Navigate to={item.path} replace />}
                        />
                      )}
                    </React.Fragment>
                  )
                })}
              </Routes>
            </div>
          </MainContainer>
        </>
      ) : (
        <Routes>
          {RoutingData[role].map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Route key={i} path={item.path} element={item.component} />
                {item.global && (
                  <Route
                    path="*"
                    element={<Navigate to={item.path} replace />}
                  />
                )}
              </React.Fragment>
            )
          })}
        </Routes>
      )}
    </>
  )
}

export default AppRouting
