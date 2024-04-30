import { Stack } from '@mui/material'
import { navItems } from '../../model/nav-items'
import { useNavigation } from '../../model/useNavigation'
import { CustomLink } from './components'
import { NavigationItem } from './components/NavItem/NavItem'

export const Navigation = () => {
  const navigationProps = useNavigation()
  return (
    <Stack direction={'row'}>
      {navItems.map((item) => {
        if (item.type === 'link') {
          return <CustomLink key={item.id} {...item} {...navigationProps} />
        } else {
          return <NavigationItem {...item} {...navigationProps} key={item.id} />
        }
      })}
    </Stack>
  )
}
