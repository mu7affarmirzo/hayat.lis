import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import GroupResearch from '../groupResearch/GroupResearch'

function RegisterTab() {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: '100%',
        padding: '10px',
        typography: 'body1',
        bgcolor: '#F5F5F5',
        height: '100%',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ paddingLeft: '5px' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={{
                background: `${handleChange} ? '#3397FF ' : '#fff'`,
              }}
              label="Исследования"
              value="1"
            />
            <Tab label="По раб. местам" value="2" />
          </TabList>
        </Box>
        <TabPanel style={{ padding: '0px' }} value="1">
          <GroupResearch />
        </TabPanel>
        <TabPanel value="2">Something</TabPanel>
      </TabContext>
    </Box>
  )
}

export default RegisterTab
