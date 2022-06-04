import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

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

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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