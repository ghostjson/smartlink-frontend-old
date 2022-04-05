import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Group,
  GroupedTransition,
  NativeSelect,
  NumberInput,
  SegmentedControl,
  Text,
  Textarea,
} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useState } from 'react';

const Create3 = () => {
  const [topColor, setTopColor] = useState<string>('#f5f5f5');
  const [bottomColor, setBottomColor] = useState<string>('#050505');

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
        <Text weight='bold' size='xl' color='blue' align='center'>
          Design Reward Link
        </Text>
        <Group spacing={0}>
          <div
            style={{
              backgroundColor: topColor,
              width: '100%',
              position: 'relative',
              height: '100px',
            }}>
            <Avatar
              size='xl'
              radius='xl'
              style={{
                position: 'absolute',
                bottom: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                border: '2px solid white',
              }}
            />
          </div>
          <Group
            direction='column'
            align='stretch'
            style={{
              width: '100%',
              backgroundColor: bottomColor,
              padding: '20px',
            }}>
            <Text weight='bold' size='lg' align='center'>
              20% Discount
            </Text>
            <input
              type='file'
              name='file'
              id='file'
              accept='.png'
              style={{ alignSelf: 'center' }}
            />
            <Textarea
              label='Text:'
              placeholder='Thank you for shopping with us'
            />
          </Group>
        </Group>
        <Button>Create</Button>
      </Group>
    </Container>
  );
};

export default Create3;
