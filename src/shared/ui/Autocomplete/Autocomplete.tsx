import { Menu, Stack } from '@mui/material'
import { useAutocomplete } from '@/shared/model/useAutocomplete'
import { TextInput } from '../TextInput/TextInput'

type AutocompleteItemType = {
  setSelectedItem: React.Dispatch<React.SetStateAction<number | undefined>>
  selectedItem?: number
}
interface AutocompleteProps {
  item: (props: AutocompleteItemType) => JSX.Element
}

export const Autocomplete = (props: AutocompleteProps) => {
  const { item: Item } = props
  const {
    open,
    handleClick,
    handleClose,
    anchorEl,
    selectedItem,
    setSelectedItem,
  } = useAutocomplete()

  return (
    <Stack sx={{ borderRadius: '4px' }}>
      <TextInput
        type="number"
        onChange={(e) => {
          setSelectedItem(+e.target.value)
        }}
        value={selectedItem}
        onClick={(e) => handleClick(e)}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        sx={{
          '& .MuiList-root': {
            width: '352px',
          },
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Item
          setSelectedItem={(value) => {
            setSelectedItem(value)
            handleClose()
          }}
          selectedItem={selectedItem}
        />
      </Menu>
    </Stack>
  )
}
