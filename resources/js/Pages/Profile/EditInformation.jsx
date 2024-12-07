import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

const EditInformation = ({ status, mustVerifyEmail }) => {
  return (
    <>
      <div className="px-6">
        <Link href={route("profile.index")} as="button" className="-ml-1">
          <ArrowLeft size={32} />
        </Link>
        <UpdateProfileInformationForm
          mustVerifyEmail={mustVerifyEmail}
          status={status}
          className="mt-6 max-w-xl"
        />
      </div>
    </>
  );
};

EditInformation.layout = (page) => (
  <AppLayout title="Informasi Personal" useNavHead={false}>
    {page}
  </AppLayout>
);

export default EditInformation;
