import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UIContext } from '../../context';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const { openSideBar } = useContext(UIContext);
  const router = useRouter();

  const navigateToHome = () => {
    router.replace('/')
  }

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideBar}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6" onClick={navigateToHome}>
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
