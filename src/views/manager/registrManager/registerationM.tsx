import { Box } from '@mui/material'

const LeftSection = () => {
  return (
    <div className={`h-[100%] flex-grow bg-red-400`}>
      <h1>Left Section</h1>
    </div>
  )
}

const RightSection = () => {
  return <Box className="h-full w-[400px] bg-[#F5F5F5]"></Box>
}

const RegistrationManager = () => {
  return (
    <div className="w-full h-full flex flex-row ">
      <RightSection />
      <LeftSection />
    </div>
  )
}

export default RegistrationManager
