import React from 'react';
import { Avatar, Container, Group, SegmentedControl } from '@mantine/core';

export const Home: React.FC = ({ children }) => {
  return (
    <Container>
      <Group direction='column' align='stetch'>
        <Avatar radius='xl' style={{ alignSelf: 'flex-end' }} />
        <SegmentedControl
          data={[
            { label: 'Create', value: 'create' },
            { label: 'Manage', value: 'manage' },
          ]}
          style={{ alignSelf: 'center' }}
        />
        {children}
      </Group>
    </Container>
  );
};
