import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

function LoginForm() {
  const form = useForm({
    initialValues: {
      Username: '',
      Password: '',
      termsOfService: false,
    },

    // validate: {
    //   Username: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

  const router = useRouter();

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            e.preventDefault();
            localStorage.setItem('visitedPanthera', 'true');
            router.push('/Profile');
        };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => onClick)}>
        <TextInput
          required
          label="Username"
          placeholder="hellopantha"
          {...form.getInputProps('Username')}
        />
        <TextInput
          required
          label="Password"
          placeholder="weareone"
          {...form.getInputProps('Password')}
        />

        <Checkbox
          mt="md"
          label="I might be a robot, no promises"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit" variant="outline">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default LoginForm;