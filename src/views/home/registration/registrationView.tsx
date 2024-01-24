import { Grid } from '@mui/material'
import RegisterTab from '../../../components/registerOrder/tabs/RegisterTab'

function registrationView() {
  return (
    <Grid container className="flex">
      <RegisterTab />
    </Grid>
  )
}

export default registrationView
