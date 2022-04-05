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
import { RiSendPlaneFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Auth } from '../components/layout';

const Register = () => {
  return (
    <Auth>
      <Center inline>
        <Text size='md' weight={700}>
          Register Account
        </Text>
      </Center>
      <TextInput
        placeholder='eg: +62896555664'
        label='Mobile Number: '
        required
      />
      <Button
        leftIcon={<RiSendPlaneFill style={{ color: 'white' }} />}
        style={{ alignSelf: 'flex-end' }}>
        Send OTP
      </Button>
      <PasswordInput placeholder='Code' label='Verification Code' required />
      <Link to='/create'>
        <Button style={{ width: '100%' }}>Register</Button>
      </Link>
      <Center inline>
        <Link to='/login'>
          <Text size='sm' variant='link'>
            Already have an accout? Login
          </Text>
        </Link>
      </Center>
    </Auth>
  );
};

export default Register;
