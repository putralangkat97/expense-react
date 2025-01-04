import NavHead from "@/Components/Home/NavHead";
import { Head, usePage } from "@inertiajs/react";
import FooterNav from "./FooterNav";

export default function AppLayout({
  title = "App",
  children,
  useNavHead = true,
}) {
  const user = usePage().props.auth.user;

  return (
    <>
      <Head title={title} />
      <div className="min-h-screen bg-base-100">
        <div className="mx-auto w-full pb-28 pt-16 sm:max-w-lg">
          {/* header nav */}
          {useNavHead && <NavHead user={user} />}

          {/* main content */}
          <main className={`sm:pl-4 ${useNavHead ? "mt-10" : ""}`}>{children}</main>

          {/* footer nav */}
          <FooterNav />
        </div>
      </div>
    </>
  );
}
