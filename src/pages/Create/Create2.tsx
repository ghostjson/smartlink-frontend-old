import {
  Avatar,
  Button,
  Container,
  Group,
  Radio,
  RadioGroup,
  SegmentedControl,
  Text,
  TextInput,
} from '@mantine/core';
import { Calendar, DatePicker } from '@mantine/dates';

const Create2 = () => {
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
        <Group direction='column' align='stretch'>
          <TextInput label='Rewards link name:' />
          <RadioGroup orientation='vertical' label='Reward Type:' required>
            <Radio value='coupon' label='coupon' />
            <Radio value='voucher' label='voucher' />
            <Radio value='promo' label='promo' />
          </RadioGroup>
          <DatePicker
            label='Valid Until: '
            placeholder='Pick date'
            firstDayOfWeek='sunday'
            required
          />
        </Group>
        <Button>Next</Button>
      </Group>
    </Container>
  );
};

export default Create2;
