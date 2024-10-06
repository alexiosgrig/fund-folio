import React, { useEffect, useMemo, useState } from 'react';
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchMarketHoliday,
  selectMarketHolidayData,
} from '../slices/marketHolidaySlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const marketHolidayData = useAppSelector(selectMarketHolidayData);

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

  const menuItemList = useMemo(() => {
    return [
      { title: 'en', label: t('english') },
      { title: 'gr', label: t('greek') },
      { title: 'de', label: t('german') },
      { title: 'sp', label: t('spanish') },
    ];
  }, [t]);

  useEffect(() => {
    dispatch(fetchMarketHoliday({ exchange: 'US' }));
  }, [dispatch]);

  const currentDate = new Date().toISOString().split('T')[0]; // Output: 'YYYY-MM-DD'

  const matchingEvent = marketHolidayData?.data?.find(
    (event) => event.atDate === currentDate
  );
  
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('welcome')}
        </Typography>
        {matchingEvent && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {matchingEvent.eventName}
          </Typography>
        )}
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
          {menuItemList.map((item, index) => (
            <MenuItem onClick={changeLanguage} title={item.title} key={index}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
