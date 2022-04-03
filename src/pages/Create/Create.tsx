import { AiOutlinePlus } from 'react-icons/ai';
import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  SegmentedControl,
  Text,
  TextInput,
} from '@mantine/core';

const Home = () => {
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
        <Text weight='bold'>Click + to create a Smartlink</Text>
        <Group grow>
          <Button leftIcon={<AiOutlinePlus />}>Rewards</Button>
          <Button leftIcon={<AiOutlinePlus />}>Forms</Button>
        </Group>
      </Group>
    </Container>
  );
};

export default Home;
