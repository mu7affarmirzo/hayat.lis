import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { colors } from '@/shared/ui/colors'
import { type HandbookGroup, handbookGroups } from '../../model/groups'
import { GroupItem } from './GroupItem'

export const HandbookGroups = () => {
  const [selectedItemId, setSelectedItemId] = useState('')
  const onClick = (group: HandbookGroup) => {
    if (selectedItemId === group.menuTitle) {
      setSelectedItemId('')
    } else {
      setSelectedItemId(group.menuTitle)
    }
  }
  return (
    <Stack
      border={`1px solid ${colors.bgHoverGray}`}
      maxWidth={'300px'}
      width={'100%'}
      p={'4px'}
      height={'calc(100vh - 76px)'}
    >
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid ${colors.darkGray}`}
      >
        <Typography>Выборка</Typography>
      </Box>
      <Stack>
        <Stack direction={'row'}>
          <Box
            border={`1px solid ${colors.bgHoverGray}`}
            borderTop={'none'}
            minWidth={'26px'}
            sx={{ background: colors.bgLightGray }}
          ></Box>
          <Box minWidth={'26px'}></Box>
          <Box
            border={`1px solid ${colors.bgHoverGray}`}
            borderTop={'none'}
            width={'100%'}
          >
            <Typography variant="caption" p="3px 5px" color={colors.darkGreen}>
              Все исследования
            </Typography>
          </Box>
        </Stack>

        {handbookGroups.map((group) => {
          return (
            <GroupItem
              selectedItemId={selectedItemId}
              key={group.menuTitle}
              group={group}
              onClick={onClick}
            />
          )
        })}
      </Stack>
    </Stack>
  )
}
