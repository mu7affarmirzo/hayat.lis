/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { LogoSanatarumIcon } from '../../assets/icons/icons'
import { ArrowDropDownIcon } from '@mui/x-date-pickers'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone'
import { NavBarDropdowns } from '../../constant/narDropDown'
import HeaderItemTabs from './headerItemTabs'
import { useReduxDispatch } from '../../hooks/useReduxHook'
import { logout } from '../../feature/slices/authSlice'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`
const HeaderChildContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  gap: 10px;
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

type Props = {
  role: 'NoAuth' | 'Admin' | 'Manager'
}

interface HeaderProps {
  setChangeTopTab: (index: number) => void
  activeTab: number
}

const Header: FC<HeaderProps> = ({ activeTab, setChangeTopTab }) => {
  const dispatch = useReduxDispatch()
  const navigate = useNavigate()
  const [activeTabHeader, setActiveTabHeader] = useState<number>(0)
  const [anchorEl, setAnchorEl] = React.useState<number>(0)
  const [activeData, setActiveData] = useState<any>()
  const [itemStyle, setItemStyle] = useState(false)

  const [role, setRole] = useState<Props['role']>('Admin')
  const SelectedNavbarDropDown = NavBarDropdowns[role]

  const changeHeaderTab = useCallback(() => {
    // navigate(SelectedNavbarDropDown[activeTab]?.dropdown[0]?.path)
    setActiveData(SelectedNavbarDropDown[activeTab])
    if (SelectedNavbarDropDown[activeTab].dropdown?.length === 1) {
      setItemStyle(true)
    } else {
      setItemStyle(false)
    }
    setActiveTabHeader(0)
  }, [SelectedNavbarDropDown, activeTab])

  useEffect(() => {
    changeHeaderTab()
  }, [changeHeaderTab])

  const handleClick = (index: number, item: any) => {
    setAnchorEl(index)
    setChangeTopTab(index)
    navigate(item.path as never)
  }

  const [profileOpen, setProfileOpen] = React.useState<null | HTMLElement>(null)

  const handleLogOut = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <div className=" flex flex-col ">
      <HeaderContainer className="h-[80px]">
        <LeftSection>
          <div className=" mr-10 ">
            <LogoSanatarumIcon />
          </div>
          <nav className="h-[100%]">
            {NavBarDropdowns[role].map((item, i) => {
              return (
                <React.Fragment key={item.path}>
                  <Button
                    id="basic-button"
                    aria-controls={anchorEl === i ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorEl === i ? 'true' : undefined}
                    onClick={() => handleClick(i, item)}
                    className={`rounded-none  px-[20px] h-[100%] text-sm   font-semibold  align-middle   cursor-pointer  normal-case ${
                      activeTab === i
                        ? 'bg-blue-400 text-gray-100'
                        : 'bg-white  text-gray-400'
                    } `}
                  >
                    <Typography className="text-sm  font-medium  normal-case ">
                      {item.title}
                    </Typography>
                  </Button>
                </React.Fragment>
              )
            })}
          </nav>
        </LeftSection>
        <RightSection>
          <>
            <Button
              id="fade-button"
              aria-controls={profileOpen ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={profileOpen ? 'true' : undefined}
              onClick={(e) => setProfileOpen(e.currentTarget)}
            >
              <Typography
                sx={{ color: 'rgba(0, 0, 0, 0.36)' }}
                className="text-sm , leading-5 , tracking-tighter , mr-10 , capitalize"
              >
                Mухиддинов
              </Typography>
              <ArrowDropDownIcon sx={{ fill: 'rgba(0, 0, 0, 0.54)' }} />
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={profileOpen}
              open={Boolean(profileOpen)}
              onClose={() => setProfileOpen(null)}
              className="hidden_profile_block"
            >
              <MenuItem onClick={handleLogOut}>
                <LogoutTwoToneIcon sx={{ mr: '12px' }} />
                Logout
              </MenuItem>
            </Menu>
          </>
        </RightSection>
      </HeaderContainer>
      <HeaderChildContainer className=" border-b border-gray-300">
        {SelectedNavbarDropDown[activeTab].dropdown?.map((item, index) => {
          return (
            <div key={index}>
              <HeaderItemTabs title={item.text} icon={item.icon} />
            </div>
          )
        })}
      </HeaderChildContainer>
    </div>
  )
}

export default Header
