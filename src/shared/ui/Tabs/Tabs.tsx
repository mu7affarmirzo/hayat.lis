import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState, type ReactNode } from 'react'
import cls from './styles.module.css'

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface BasicTabsProps {
  panels: Array<{
    item: JSX.Element
    label: string
  }>
}

export const BasicTabs = (props: BasicTabsProps) => {
  const { panels } = props
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          classes={{ root: cls.tabsRoot }}
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {panels.map((p, index) => {
            return (
              <Tab
                classes={{
                  root: cls.tabRoot,
                  selected: cls.selectedTab,
                }}
                label={p.label}
                key={p.label}
                {...a11yProps(index)}
              />
            )
          })}
        </Tabs>
      </Box>
      {panels.map((component, index) => {
        return (
          <CustomTabPanel key={index} value={value} index={index}>
            {component.item}
          </CustomTabPanel>
        )
      })}
    </Box>
  )
}
