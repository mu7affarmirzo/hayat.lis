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
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
          </TabList>
        </Box>
        <GroupResearch value="1" />
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  )
}

export default RegisterTab
