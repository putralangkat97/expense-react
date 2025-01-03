import Divider from "@/Components/Divider";
import Toast from "@/Components/Toast";
import { useTransactionHook } from "@/Helpers/TransactionModalHook";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

const ProfileIndex = () => {
  const { showToast, toastMessage, toastType } = useTransactionHook();

  return (
    <>
      {/* toast */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="px-6">
        <div className="card card-compact bg-base-200 p-3">
          <div className="card-body">
            <div className="flex flex-col space-y-10">
              <Link
                href={route("profile.edit-information")}
                className="flex w-full items-center justify-between"
              >
                <div>Informasi Personal</div>
                <ChevronRight size={20} />
              </Link>
              <Link
                href={route("profile.edit-password")}
                className="flex w-full items-center justify-between"
              >
                <div>Keamanan</div>
                <ChevronRight size={20} />
              </Link>
              <Link
                href={"#"}
                className="flex w-full items-center justify-between"
              >
                <div>Setting</div>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        <Divider />
        <Link
          as="button"
          method="post"
          href={route("logout")}
          className="btn btn-error btn-block border-2 border-red-700 hover:border-red-700 hover:bg-red-700 hover:text-base-100"
        >
          Logout
        </Link>
      </div>
    </>
  );
};

ProfileIndex.layout = (page) => (
  <AppLayout title="Profile" useNavHead={true}>
    {page}
  </AppLayout>
);

export default ProfileIndex;
