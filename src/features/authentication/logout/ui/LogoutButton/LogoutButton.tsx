import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { ArrowDropDownIcon } from '@mui/x-date-pickers'
import { useLogoutButton } from '../../model/useLogoutButton'

export function LogoutButton() {
  const { onConfirmLogout, profileOpen, setProfileOpen } = useLogoutButton()

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={profileOpen ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={profileOpen ? 'true' : undefined}
        onClick={(e) => setProfileOpen(e.currentTarget)}
      >
        <Typography color={'#00000061'}>Mухиддинов</Typography>
        <ArrowDropDownIcon sx={{ fill: 'rgba(0, 0, 0, 0.54)', ml: '10px' }} />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={profileOpen}
        open={Boolean(profileOpen)}
        onClose={() => setProfileOpen(null)}
        className="hidden_profile_block"
      >
        <MenuItem onClick={onConfirmLogout}>
          <LogoutTwoToneIcon sx={{ mr: '12px' }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
