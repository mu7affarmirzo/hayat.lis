import { Outlet } from 'react-router-dom'
import Header from '../../../components/header/header'

const Layout = () => {
  return (
    <div className={`flex flex-col max-h-screen over `}>
      <Header />
      <div
        className={`w-full  ${'max-h-[calc(100vh-85px)]'}  pt-3 px-3  relative overflow-hidden`}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
