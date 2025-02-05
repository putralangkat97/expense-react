import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { ArrowLeft, LoaderIcon } from "lucide-react";

const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <>
      {status && (
        <div className="text-success mb-4 text-sm font-medium">{status}</div>
      )}

      <div className="fixed left-4 top-6">
        <Link
          href={route("welcome")}
          as="button"
          className="-ml-4 btn btn-ghost"
        >
          <ArrowLeft size={44} />
        </Link>
      </div>

      <form onSubmit={submit} className="w-full px-6 sm:max-w-md">
        <div>
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-2 block w-full"
            autoComplete="username"
            placeholder="alamat email"
            isFocused={true}
            onChange={(e) => setData("email", e.target.value)}
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
            autoComplete="current-password"
            placeholder="password"
            onChange={(e) => setData("password", e.target.value)}
          />
          <InputError message={errors.password} className="mt-2" />
        </div>
        <div className="mt-4 block">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <span className="ms-2 text-base-content">Ingat saya</span>
          </label>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <PrimaryButton className="btn-block" size="lg" disabled={processing}>
            {processing && <LoaderIcon className="animate-spin" />}
            {!processing && "Masuk"}
          </PrimaryButton>
        </div>
      </form>

      {canResetPassword && (
        <div className="fixed bottom-6">
          <Link
            href={route("password.request")}
            className="link text-primary text-sm"
          >
            Forgot your password?
          </Link>
        </div>
      )}
    </>
  );
};

Login.layout = (page) => <GuestLayout title={"Log In"}>{page}</GuestLayout>;

export default Login;
