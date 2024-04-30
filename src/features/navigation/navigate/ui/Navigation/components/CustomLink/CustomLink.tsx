import { type NavItem } from '../../../../model/nav-items'
import { CustomLink as Link } from './styles'

interface LinkProps extends NavItem {
  setActiveNav: React.Dispatch<React.SetStateAction<string>>
  activeNav: string
}

export const CustomLink = (props: LinkProps) => {
  const { setActiveNav, activeNav } = props
  return (
    <Link
      href={props.slug}
      onClick={() => setActiveNav(props.slug)}
      $active={activeNav === props.slug}
      key={props.id}
    >
      {props.name}
    </Link>
  )
}
