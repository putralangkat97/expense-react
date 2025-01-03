import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <>
      <div className="fixed left-4 top-6">
        <Link
          href={route("welcome")}
          as="button"
          className="btn btn-ghost -ml-4"
        >
          <ArrowLeft size={44} />
        </Link>
      </div>

      <form onSubmit={submit} className="w-full px-6 sm:max-w-md">
        <div>
          <InputLabel htmlFor="name" value="Name" />
          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            placeholder="Name"
            isFocused={true}
            onChange={(e) => setData("name", e.target.value)}
            required
          />
          <InputError message={errors.name} className="mt-2" />
        </div>
        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            placeholder="Email address"
            onChange={(e) => setData("email", e.target.value)}
            required
          />
          <InputError message={errors.email} className="mt-2" />
        </div>
        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />
          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            placeholder="Password"
            onChange={(e) => setData("password", e.target.value)}
            required
          />
          <InputError message={errors.password} className="mt-2" />
        </div>
        <div className="mt-4">
          <InputLabel
            htmlFor="password_confirmation"
            value="Confirm Password"
          />
          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            placeholder="Confirm password"
            onChange={(e) => setData("password_confirmation", e.target.value)}
            required
          />
          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <PrimaryButton
            className="btn-block"
            variant="neutral"
            size="lg"
            disabled={processing}
          >
            Register
          </PrimaryButton>
        </div>
      </form>

      <div className="fixed bottom-6">
        <Link href={route("login")} className="link text-primary text-sm">
          Already registered?
        </Link>
      </div>
    </>
  );
};

Register.layout = (page) => <GuestLayout title={"Sign Up"}>{page}</GuestLayout>;

export default Register;
