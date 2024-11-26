import AccountCard from '@/Components/Account/AccountCard';
import AppLayout from '@/Layouts/AppLayout';

const Account = ({ accounts }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-center text-3xl sm:text-4xl">Account List</h2>
      </div>
      <div className="mt-10 flex flex-col space-y-2">
        {accounts.map((acc, key) => (
          <AccountCard data={acc} key={key} />
        ))}
      </div>
    </>
  );
};

Account.layout = (page) => (
  <AppLayout title="Account" useNavHead={false}>
    {page}
  </AppLayout>
);

export default Account;
