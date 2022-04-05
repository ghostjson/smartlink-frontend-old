import { RiSendPlaneFill } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';
import {
  Avatar,
  Button,
  Center,
  Container,
  Group,
  PasswordInput,
  Select,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';

const Register3 = () => {
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
        <TextInput label='Brand Name: ' />
        <Textarea label='Reward redemption address' />
        <Select
          label='Industry:'
          placeholder='Pick an industry'
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
        />
        <Button>Submit</Button>
      </Group>
    </Container>
  );
};

export default Register3;
