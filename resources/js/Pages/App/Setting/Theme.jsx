import PrimaryButton from "@/Components/PrimaryButton";
import Radio from "@/Components/Radio";
import Toast from "@/Components/Toast";
import { useModalHook } from "@/Helpers/modalHook";
import AppLayout from "@/Layouts/AppLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { ArrowLeft, LoaderIcon } from "lucide-react";

const ThemeIndex = () => {
  const { toastMessage, toastType, showToast } = useModalHook();
  const { auth } = usePage().props;
  const initialTheme = auth?.user?.themes || "light";
  console.log(initialTheme, auth);

  const { data, setData, patch, processing } = useForm({
    theme: initialTheme,
  });

  const handleThemeChange = (e) => {
    e.preventDefault();
    patch(route("setting.update-theme"), {
      preserveScroll: true,
    });
  };

  const defaultThemes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "dim", label: "Dim" },
    { value: "dracula", label: "Dracula" },
    { value: "cupcake", label: "Cupcake" },
    { value: "corporate", label: "Corporate" },
  ];

  return (
    <>
      {/* toastr */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="px-6">
        <Link href={route("profile.index")} as="button" className="-ml-1">
          <ArrowLeft size={32} />
        </Link>

        <div className="card card-sm sm:card-md bg-base-300 mt-6">
          <form onSubmit={handleThemeChange} className="card-body">
            <label className="text-lg sm:text-xl">Pilih Tema</label>
            <fieldset className="fieldset">
              {defaultThemes.map((item) => (
                <label
                  className="flex gap-3 cursor-pointer items-center mt-2"
                  key={item.label}
                >
                  <Radio
                    value={item.value}
                    name="theme-radios"
                    className="theme-controller"
                    checked={data.theme === item.value}
                    onChange={(e) => setData("theme", e.target.value)}
                    disabled={processing}
                  />
                  {item.label}
                </label>
              ))}

              <div className="mt-4">
                <PrimaryButton
                  variant="primary"
                  className="btn-block"
                  disabled={processing}
                >
                  {processing && <LoaderIcon className="animate-spin" />}
                  {!processing && "Simpan"}
                </PrimaryButton>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

ThemeIndex.layout = (page) => (
  <AppLayout title="Setting" useNavHead={false}>
    {page}
  </AppLayout>
);

export default ThemeIndex;
