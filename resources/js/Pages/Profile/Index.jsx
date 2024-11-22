import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

const ProfileIndex = () => {
  return (
    <Link
      as="button"
      method="post"
      href={route('logout')}
      className="btn btn-error btn-block"
    >
      Logout
    </Link>
  );
};

ProfileIndex.layout = (page) => (
  <AppLayout title="Profile" useNavHead={false}>
    {page}
  </AppLayout>
);

export default ProfileIndex;
