import { Link, usePage } from "@inertiajs/react";
import {
  ChartNoAxesCombined,
  CircleUserRound,
  Home,
  ScrollText,
  WalletMinimal,
} from "lucide-react";

const FooterNav = () => {
  const { url } = usePage();

  const navContents = [
    {
      name: "Home",
      icon: <Home size={32} />,
      url: route("home"),
      isActive: url.startsWith("/home"),
    },
    {
      name: "Account",
      icon: <WalletMinimal size={32} />,
      url: route("account.index"),
      isActive: url.startsWith("/account"),
    },
    {
      name: "Transaction",
      icon: <ScrollText size={32} />,
      url: route("transaction.index"),
      isActive: url.startsWith("/transaction"),
    },
    {
      name: "Report",
      icon: <ChartNoAxesCombined size={32} />,
      url: route("report.index"),
      isActive: url.startsWith("/report"),
    },
    {
      name: "Profile",
      icon: <CircleUserRound size={32} />,
      url: route("profile.index"),
      isActive: url.startsWith("/profile"),
    },
  ];

  return (
    <div className="h-18 fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 transform border-t-2 border-base-300 bg-base-100 shadow-md transition-transform duration-300 sm:h-20">
      <div className="flex justify-around space-x-1.5 px-2 py-2 sm:-mt-0.5">
        {navContents.map((item) => (
          <Link
            key={item.name}
            prefetch="click"
            href={item.url}
            className={
              "rounded-full border-2 p-3 transition-colors duration-200 " +
              (item.isActive
                ? "border-neutral bg-base-200 text-base-content"
                : "border-transparent bg-transparent text-base-content")
            }
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
