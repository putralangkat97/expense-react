import Divider from "@/Components/Divider";
import Toast from "@/Components/Toast";
import { useTransactionHook } from "@/Helpers/TransactionModalHook";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import { ChevronRight, LogOut } from "lucide-react";

const ProfileIndex = () => {
  const { showToast, toastMessage, toastType } = useTransactionHook();

  return (
    <>
      {/* toast */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="px-6">
        <div className="card card-sm sm:card-md bg-base-300 p-3">
          <div className="card-body">
            <div className="flex flex-col space-y-8">
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
                href={route("setting.theme")}
                className="flex w-full items-center justify-between"
              >
                <div>Tema</div>
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
          className="btn btn-error btn-block border-2"
        >
          Logout
          <LogOut size={16} />
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
