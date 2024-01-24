import { Grid } from '@mui/material'
import RegisterTab from '../../../components/registerOrder/tabs/RegisterTab'

function registrationView() {
  return (
    <Grid container xs={12} md={12} className="flex">
      <Grid item xs={3.5}>
        <RegisterTab />
      </Grid>
      <Grid item xs={6.5}></Grid>
    </Grid>
  )
}

export default registrationView
