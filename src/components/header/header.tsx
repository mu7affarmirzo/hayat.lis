/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { LogoSanatarumIcon } from '../../assets/icons/icons'
import { ArrowDropDownIcon } from '@mui/x-date-pickers'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone'
import { NavBarDropdowns } from '../../constant/narDropDown'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
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

const Header = () => {
  const navigate = useNavigate()

  const isActiveNav = useCallback((path: string) => {
    return location.pathname.includes(path)
  }, [])
  const [profileOpen, setProfileOpen] = React.useState<null | HTMLElement>(null)

  const handleLogOut = useCallback(() => {
    console.log('log out')
  }, [])

  return (
    <div className="">
      <HeaderContainer className=" border-b border-gray-300 h-[80px] bg-red-500">
        <LeftSection>
          <div className=" mr-10 ">
            <LogoSanatarumIcon />
          </div>

          <nav className="h-[100%]">
            {NavBarDropdowns.map((item: any) => {
              return (
                <React.Fragment key={item.path}>
                  <Button
                    id="basic-button"
                    aria-haspopup="true"
                    onClick={() => {
                      navigate(item.path)
                    }}
                    className={` rounded-none  px-[20px] h-[100%] text-sm   font-semibold  align-middle   cursor-pointer  normal-case ${
                      isActiveNav(item.mainPath)
                        ? 'bg-blue-400 text-gray-100'
                        : 'bg-white  text-gray-700'
                    } `}
                  >
                    <Typography className="text-sm  font-medium ">
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
    </div>
  )
}

export default Header