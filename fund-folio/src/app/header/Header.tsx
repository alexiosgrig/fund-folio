import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const lng = event.target.title;
    handleMenu();
    i18n.changeLanguage(lng);
  };

  const handleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('news')}
        </Typography>
        <Button color="inherit" onClick={handleMenu}>
          {t('language')}
        </Button>
        <Menu
          open={openMenu}
          onClose={handleMenu}
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={changeLanguage} title="en">
            {t('english')}
          </MenuItem>
          <MenuItem onClick={changeLanguage} title="gr">
            {t('greek')}
          </MenuItem>
          <MenuItem onClick={changeLanguage} title="de">
            {t('german')}
          </MenuItem>
          <MenuItem onClick={changeLanguage} title="sp">
            {t('spanish')}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
