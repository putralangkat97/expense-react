import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';

const ForgotPassword = ({ status }) => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <>
      <div className="px-4 mb-4 text-sm text-gray-600">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </div>

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit} className="px-4">
        <TextInput
          id="email"
          type="email"
          name="email"
          value={data.email}
          className="mt-1 block w-full"
          placeholder="Email address"
          isFocused={true}
          onChange={(e) => setData('email', e.target.value)}
        />
        <InputError message={errors.email} className="mt-2" />

        <div className="mt-4 flex items-center justify-center">
          <PrimaryButton className="btn-block" disabled={processing}>
            Email Password Reset Link
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

ForgotPassword.layout = (page) => (
  <GuestLayout title={'Forgot Password'}>{page}</GuestLayout>
);

export default ForgotPassword;
