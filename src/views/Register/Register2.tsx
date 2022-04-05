import { RiSendPlaneFill } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';
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

const Register2 = () => {
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
          value={'+62896555664'}
          rightSection={<AiFillCheckCircle style={{ color: '#008800' }} />}
          disabled
          required
        />
        <PasswordInput label='Set Password' />
        <PasswordInput label='Re-Enter Password' />
        <Button>Next</Button>
      </Group>
    </Container>
  );
};

export default Register2;
