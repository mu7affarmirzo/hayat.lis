import { Stack } from '@mui/material'
import { ContainerInfoTable } from '@/entities/container-info'
import { ResearchTable } from '@/entities/research'
import { EditQRCode } from '@/features/qr-container/edit-qr-code'
import { FilterTabs } from '@/features/research/filter-research'
import { FilterResearch } from '@/features/sampling-conditions/filter-research'
import { useResearchTabs } from '../model/useResearchTabs'
import { ResearchInfo } from './ResearchInfo'

export const ResearchTabs = () => {
  const {
    activeRow,
    researchList,
    setActiveRow,
    isLoadingData,
    choice,
    setChoice,
  } = useResearchTabs()

  return (
    <Stack direction={'row'} width={'100%'}>
      <FilterTabs />
      <Stack
        gap={'5px'}
        spacing={'5px'}
        marginRight={'5px'}
        width={'100%'}
        maxWidth={'calc(100vw - 400px)'}
        paddingLeft={'5px'}
      >
        <ResearchTable
          data={researchList}
          choice={choice}
          activeRow={activeRow}
          isLoadingData={isLoadingData}
          setActiveRow={setActiveRow}
          samplingConditionsSlot={
            <FilterResearch choice={choice} setChoice={setChoice} />
          }
          containerInfoTable={
            <ContainerInfoTable
              resultsList={researchList}
              editQrSlot={EditQRCode}
            />
          }
        />
        <ResearchInfo orderId={activeRow} />
      </Stack>
    </Stack>
  )
}
