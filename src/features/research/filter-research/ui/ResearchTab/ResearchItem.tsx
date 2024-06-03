import { ArrowDropDown, ArrowRight } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { type GroupResearch } from '../../model/types'

interface ItemInterface {
  item: GroupResearch
}

export const ResearchItem = (props: ItemInterface) => {
  const { item } = props
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Stack width={'100%'}>
      <Stack
        borderTop={`1px solid ${colors.borderLightGray}`}
        onClick={() => {
          setIsExpanded((prev) => !prev)
        }}
        sx={{ cursor: 'pointer' }}
        direction={'row'}
        key={item.id}
      >
        <Stack
          borderBottom={`1px solid ${colors.borderLightGray}`}
          borderLeft={`1px solid ${colors.borderLightGray}`}
          borderRight={`1px solid ${colors.bgHoverGray}`}
          p={'3px'}
          direction="row"
          alignItems={'center'}
        >
          {isExpanded ? (
            <ArrowDropDown width={'20px'} color="action" />
          ) : (
            <ArrowRight width={'20px'} color="action" />
          )}
          <Icon type="note-plus" />
        </Stack>
        <Box
          borderBottom={`1px solid ${colors.bgHoverGray}`}
          borderLeft={`1px solid ${colors.bgHoverGray}`}
          borderRight={`1px solid ${colors.bgHoverGray}`}
          p={'3px 5px'}
          width={'100%'}
        >
          <Typography variant="caption">{item.name}</Typography>
        </Box>
      </Stack>
      {/* {isExpanded && } */}
      {isExpanded &&
        item.lab_research.map((research) => (
          <Stack
            key={research.id}
            width={'calc(100% - 52.24px)'}
            alignSelf={'flex-end'}
            borderBottom={`1px solid ${colors.borderLightGray}`}
            borderLeft={`1px solid ${colors.borderLightGray}`}
            borderRight={`1px solid ${colors.bgHoverGray}`}
            p={'3px'}
          >
            {research.name}
          </Stack>
        ))}
    </Stack>
  )
}
