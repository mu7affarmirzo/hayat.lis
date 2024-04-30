import { ArrowRight, ArrowDropDown } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { colors } from '@/shared/ui/colors'
import { type HandbookGroup } from '../../model/groups'

interface ItemProps {
  group: HandbookGroup
  onClick: (group: HandbookGroup) => void
  selectedItemId: string
}

export const GroupItem = (props: ItemProps) => {
  const { group, onClick, selectedItemId } = props
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Stack>
      <Stack direction={'row'}>
        <Stack
          border={`1px solid ${colors.bgHoverGray}`}
          borderTop={'none'}
          onClick={() => onClick(group)}
          minWidth={'26px'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            background: colors.bgLightGray,
            cursor: 'pointer',
          }}
        >
          {group.menuTitle === selectedItemId && (
            <ArrowRight sx={{ color: '#0000008A' }} />
          )}
        </Stack>
        <Stack
          sx={{ cursor: 'pointer' }}
          alignItems={'center'}
          minWidth={'26px'}
          onClick={() => setIsExpanded((v) => !v)}
        >
          {!isExpanded ? (
            <ArrowRight sx={{ color: colors.borderLightGray }} />
          ) : (
            <ArrowDropDown sx={{ color: colors.borderLightGray }} />
          )}
        </Stack>
        <Box
          border={`1px solid ${colors.bgHoverGray}`}
          borderTop={'none'}
          width={'100%'}
        >
          <Typography variant="caption" p="3px 5px">
            {group.menuTitle}
          </Typography>
        </Box>
      </Stack>
      {isExpanded && (
        <Stack>
          {group.subMenu.map((menuItem) => {
            return (
              <Stack
                key={menuItem.subMenuName}
                justifyContent={'space-between'}
                direction={'row'}
              >
                <Box
                  border={`1px solid ${colors.bgHoverGray}`}
                  borderTop={'none'}
                  minWidth={'26px'}
                  sx={{ background: colors.bgLightGray }}
                ></Box>
                <Box
                  border={`1px solid ${colors.bgHoverGray}`}
                  borderTop={'none'}
                  width={'222px'}
                >
                  <Typography variant="caption" p="3px 5px">
                    {menuItem.subMenuName}
                  </Typography>
                </Box>
              </Stack>
            )
          })}
        </Stack>
      )}
    </Stack>
  )
}
