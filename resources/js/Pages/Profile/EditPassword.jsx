import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";

const EditPassword = () => {
  return (
    <>
      <div className="px-6">
        <Link href={route("profile.index")} as="button" className="-ml-1">
          <ArrowLeft size={32} />
        </Link>
        <UpdatePasswordForm className="max-w-xl mt-6" />
      </div>
    </>
  );
};

EditPassword.layout = (page) => (
  <AppLayout title="Informasi Personal" useNavHead={false}>
    {page}
  </AppLayout>
);

export default EditPassword;
