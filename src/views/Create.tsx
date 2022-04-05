import { AiOutlinePlus } from 'react-icons/ai';
import { Button, Group, Text } from '@mantine/core';

import { Home } from '../components/layout';
import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <Home>
      <Text weight='bold'>Click + to create a Smartlink</Text>
      <Group grow>
        <Link to='/create/rewards'>
          <Button leftIcon={<AiOutlinePlus />} style={{ width: '100%' }}>
            Rewards
          </Button>
        </Link>
        <Button leftIcon={<AiOutlinePlus />}>Forms</Button>
      </Group>
    </Home>
  );
};

export default Create;
