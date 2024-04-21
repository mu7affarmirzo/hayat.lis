import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { navItems } from './nav-items'

export const useNavigation = () => {
  const location = useLocation()
  const [activeNav, setActiveNav] = useState(navItems[0].slug)

  const findActive = (pathname: string) => {
    const foundNav = navItems.find((item) => pathname.includes(item.slug))
    return foundNav?.slug ?? navItems[0].slug
  }

  useEffect(() => {
    setActiveNav(findActive(location.pathname))
  }, [])

  return { activeNav, setActiveNav }
}
