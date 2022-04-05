import {
  Avatar,
  Button,
  Container,
  Group,
  NativeSelect,
  NumberInput,
  SegmentedControl,
  TextInput,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const Rewards = () => {
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
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span>Reward Type:</span>
            <label
              htmlFor='coupon'
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type='radio' name='r-type' id='coupon' value='coupon' />
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Coupon{' '}
                <NumberInput
                  min={0}
                  max={100}
                  placeholder='10'
                  sx={{ width: 'auto' }}
                />
                % discount
              </span>
            </label>
            <label
              htmlFor='voucher'
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type='radio' name='r-type' id='voucher' value='voucher' />
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Voucher
                <NumberInput
                  min={0.0}
                  placeholder='10'
                  sx={{ width: 'auto' }}
                />
                <NativeSelect data={['USD', 'EUR', 'INR', 'PNY', 'JPN']} />
              </span>
            </label>
            <label
              htmlFor='promo'
              style={{
                display: 'flex',
                alignItems: 'center',
                // for mobile align items should be flex start
                gap: '10px',
              }}>
              <input type='radio' name='r-type' id='promo' value='promo' />
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}>
                Promo Buy
                <TextInput placeholder='Any Beef Burger' />
                Get
                <TextInput placeholder='1 Small Fries Free' />
              </span>
            </label>
          </div>
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

export default Rewards;
