import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

interface CardContainerSharedProps {
  children: React.ReactNode;
  title?: string;
  subheader?: string;
}

export const CardContainerShared: React.FC<CardContainerSharedProps> = ({
  children,
  title,
  subheader,
}) => {
  const hasCardHeader = subheader && title;
  return (
    <Card sx={{ padding: hasCardHeader ? '10px' : '10px' }}>
      {hasCardHeader && <CardHeader title={title} subheader={subheader} />}
      <CardContent>{children}</CardContent>
    </Card>
  );
};
