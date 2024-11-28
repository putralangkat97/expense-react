import AppLayout from '@/Layouts/AppLayout';

const Report = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h2 className="text-center text-3xl sm:text-4xl">Report</h2>
      </div>
      <div className="mt-10 flex flex-col space-y-2 text-center">
        Coming soon
      </div>
    </>
  );
};

Report.layout = (page) => (
  <AppLayout title="Report" useNavHead={false}>
    {page}
  </AppLayout>
);

export default Report;
