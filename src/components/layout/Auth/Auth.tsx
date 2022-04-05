import React from 'react';
import { Avatar, Container, Group } from '@mantine/core';

export const Auth: React.FC = ({ children }) => {
  return (
    <Container size='xs' px='xs' style={{ minHeight: '100vh' }}>
      <Group direction='column' align='stretch'>
        <Avatar
          radius='xl'
          color='grape'
          size='lg'
          style={{ alignSelf: 'center' }}>
          GR
        </Avatar>
        {children}
      </Group>
    </Container>
  );
};
