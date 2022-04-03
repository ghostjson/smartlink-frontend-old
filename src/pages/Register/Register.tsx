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

const Register = () => {
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
        <Button>Next</Button>
        <Center inline>
          <Text size='sm' variant='link' component='a' href='/register'>
            Already have an accout? Login
          </Text>
        </Center>
      </Group>
    </Container>
  );
};

export default Register;
