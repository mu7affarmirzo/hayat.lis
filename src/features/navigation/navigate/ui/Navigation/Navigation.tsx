import { Stack } from '@mui/material'
import { navItems } from '../../model/nav-items'
import { useNavigation } from '../../model/useNavigation'
import { CustomLink } from './styles'

export const Navigation = () => {
  const { activeNav, setActiveNav } = useNavigation()
  return (
    <Stack direction={'row'}>
      {navItems.map((item) => (
        <CustomLink
          href={item.slug}
          onClick={() => setActiveNav(item.slug)}
          $active={activeNav === item.slug}
          key={item.id}
        >
          {item.name}
        </CustomLink>
      ))}
    </Stack>
  )
}
