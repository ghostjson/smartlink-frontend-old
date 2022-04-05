import {
  Avatar,
  Button,
  Center,
  Container,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import { Auth } from '../components/layout';

const Login = () => {
  return (
    <Auth>
      <TextInput placeholder='Phone number' label='Mobile Number: ' required />
      <PasswordInput placeholder='Password' label='Password' required />
      <Link to='/create'>
        <Button style={{ width: '100%' }}> Login</Button>
      </Link>
      <Group align='center' style={{ alignSelf: 'center' }}>
        <Link to='/register'>
          <Text size='sm' variant='link'>
            Sign Up
          </Text>
        </Link>
        <Text size='sm'>|</Text>
        <Link to='/forgot'>
          <Text size='sm' variant='link'>
            Forgot Passcode
          </Text>
        </Link>
      </Group>
    </Auth>
  );
};

export default Login;
