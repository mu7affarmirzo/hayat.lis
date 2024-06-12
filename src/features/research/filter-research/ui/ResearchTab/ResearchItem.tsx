import { ArrowDropDown, ArrowRight } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { type GroupResearch } from '@/shared/types'
import { Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

interface ItemInterface {
  item: GroupResearch
  setCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>
  setLabId: React.Dispatch<React.SetStateAction<number | undefined>>
  labId?: number
  categoryId?: number
}

export const ResearchItem = (props: ItemInterface) => {
  const { item, setLabId, labId, setCategoryId, categoryId } = props
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Stack width={'100%'}>
      <Stack
        borderTop={`1px solid ${colors.borderLightGray}`}
        onClick={() => {
          setIsExpanded((prev) => !prev)
          if (!isExpanded) {
            setCategoryId(item.id)
            setLabId(undefined)
          }
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
          <Typography
            variant="caption"
            fontWeight={item.id === categoryId ? 500 : 400}
          >
            {item.name}
          </Typography>
        </Box>
      </Stack>
      {/* {isExpanded && } */}
      {isExpanded &&
        item.lab_research.map((research) => (
          <Stack
            onClick={() => {
              if (labId === research.id) {
                setLabId(undefined)
              } else {
                setCategoryId(item.id)
                setLabId(research.id)
              }
            }}
            sx={{ cursor: 'pointer' }}
            key={research.id}
            width={'calc(100% - 52.24px)'}
            alignSelf={'flex-end'}
            borderBottom={`1px solid ${colors.borderLightGray}`}
            borderLeft={`1px solid ${colors.borderLightGray}`}
            borderRight={`1px solid ${colors.bgHoverGray}`}
            p={'3px'}
            fontWeight={labId === research.id ? 500 : 400}
          >
            {research.name}
          </Stack>
        ))}
    </Stack>
  )
}
