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

const Login = () => {
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
        <TextInput
          placeholder='Phone number'
          label='Mobile Number: '
          required
        />
        <PasswordInput placeholder='Password' label='Password' required />
        <Button> Login</Button>
        <Group align='center' style={{ alignSelf: 'center' }}>
          <Text size='sm' variant='link' component='a' href='/register'>
            Sign Up
          </Text>
          <Text size='sm'>|</Text>
          <Text size='sm' variant='link' component='a' href='/forgot'>
            Forgot Passcode
          </Text>
        </Group>
      </Group>
    </Container>
  );
};

export default Login;
