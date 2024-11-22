import Illustration from '@/Components/Icons/Illustration';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';

const Welcome = () => {
  return (
    <div className="w-full px-6 sm:max-w-md">
      <div className="flex justify-center">
        <Illustration width={280} height={340} />
      </div>
      <div className="mt-2 px-4 text-center">
        <div>
          <h1 className="text-neutral text-4xl font-medium">
            Spend <span className="text-primary">Smarter</span>
          </h1>
          <h1 className="text-neutral -mt-2 text-4xl font-medium">
            <span className="text-primary">Save</span> More
          </h1>
        </div>
        <div>
          <Link
            as="button"
            href={route('register')}
            className="btn btn-block btn-lg btn-primary mt-4"
          >
            {'Get Started'}
          </Link>
          <div className="text-neutral mt-px text-sm">
            {'already have account? '}
            <Link href={route('login')} className="text-primary link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Welcome.layout = (page) => <GuestLayout title={'Welcome'}>{page}</GuestLayout>;

export default Welcome;
