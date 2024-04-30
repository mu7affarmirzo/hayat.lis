import { ArrowRight } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import { IconMenuItem, NestedMenuItem } from 'mui-nested-menu'
import { Link } from 'react-router-dom'
import { type NavItem } from '@/features/navigation/navigate/model/nav-items'
import { useNavItem } from '@/features/navigation/navigate/model/useNavItem'
import { LinkBtn } from './styles'

interface NavProps extends NavItem {
  setActiveNav: React.Dispatch<React.SetStateAction<string>>
  activeNav: string
}

export const NavigationItem = (props: NavProps) => {
  const { handleClick, handleClose, open, anchorEl, navigate } = useNavItem()

  return (
    <div>
      <LinkBtn
        onClick={() => {
          props.setActiveNav(props.slug)
          navigate(props.slug)
        }}
        $active={props.activeNav === props.slug}
        onMouseEnter={(e) => handleClick(e)}
      >
        {props.name}
      </LinkBtn>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {props.menu?.map((menuItem) => {
          if (!menuItem.withSubmenu) {
            return (
              <Link
                onClick={() => props.setActiveNav(props.slug)}
                key={menuItem.menuTitle}
                to={menuItem.link}
              >
                <MenuItem key={menuItem.menuTitle} onClick={handleClose}>
                  {menuItem.menuTitle}
                </MenuItem>
              </Link>
            )
          } else {
            return (
              <NestedMenuItem
                key={menuItem.menuTitle}
                label={menuItem.menuTitle}
                parentMenuOpen={open}
                rightIcon={<ArrowRight width={'10px'} color="action" />}
                sx={{ pl: '8px', width: '400px' }}
              >
                {menuItem.withSubmenu &&
                  menuItem.subMenu?.map((subMenuItem) => {
                    return (
                      <Link
                        onClick={() => props.setActiveNav(props.slug)}
                        key={subMenuItem.subMenuName}
                        to={subMenuItem.subMenuLink}
                      >
                        <IconMenuItem
                          sx={{ width: '350px' }}
                          onClick={handleClose}
                          label={subMenuItem.subMenuName}
                        />
                      </Link>
                    )
                  })}
              </NestedMenuItem>
            )
          }
        })}
      </Menu>
    </div>
  )
}
