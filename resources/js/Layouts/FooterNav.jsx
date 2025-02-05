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
    <>
      <div className="h-18 fixed md:hidden bottom-0 left-1/2 z-50 w-full -translate-x-1/2 transform border-t-2 border-base-200 bg-base-100 shadow-md transition-transform duration-200 sm:h-20">
        <div className="flex justify-around space-x-1.5 px-2 py-2 sm:-mt-0.5">
          {navContents.map((item) => (
            <Link
              key={item.name}
              prefetch="click"
              href={item.url}
              className={
                "rounded-full p-3 transition-colors duration-200 " +
                (item.isActive
                  ? "bg-primary text-primary-content"
                  : "bg-transparent text-base-content")
              }
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:fixed md:flex left-4 top-1/2 flex-col justify-around space-y-1.5 -translate-y-1/2 sm:-mt-0.5">
        {navContents.map((item) => (
          <Link
            key={item.name}
            prefetch="click"
            href={item.url}
            className={
              "rounded-full flex items-center p-3 transition-colors duration-200 tooltip tooltip-right " +
              (item.isActive
                ? "bg-primary text-primary-content"
                : "bg-transparent text-base-content")
            }
            data-tip={item.name}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </>
  );
};

export default FooterNav;
