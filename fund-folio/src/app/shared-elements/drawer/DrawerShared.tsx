import {
  Box,
  Drawer,
  List,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface DrawerSharedProps {
  open: boolean;
  toggleDrawer: (x: boolean) => any;
}

export const DrawerShared: React.FC<DrawerSharedProps> = ({
  open,
  toggleDrawer,
}) => {
  const drawerList = [
    { label: 'Recommendations', navigation: 'recommendations' },
  ];
  return (
    <Box role={'presentation'} onClick={toggleDrawer(false)}>
      <Drawer anchor={'left'} open={open} transitionDuration={300}>
        <Typography> wdqwdqwdqw</Typography>
        {drawerList.map((element, index) => (
          <List key={index}>
              <Link to={'recommendations'}>{element?.label}</Link>
          </List>
        ))}
      </Drawer>
    </Box>
  );
};
