import ThemeHandler from "@/Components/ThemeHandler";
import { Head } from "@inertiajs/react";

export default function GuestLayout({ children, title }) {
  return (
    <ThemeHandler>
      <Head title={title} />
      <div className="flex min-h-screen flex-col items-center bg-base-100 mx-auto justify-center">
        {children}
      </div>
    </ThemeHandler>
  );
}
