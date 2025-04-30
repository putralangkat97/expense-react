import { Link } from "@inertiajs/react";
import { Pencil } from "lucide-react";

const NavHead = ({ user }) => {
  return (
    <Link
      href={route("profile.index")}
      className="flex flex-col items-center justify-center space-y-2"
      prefetch
    >
      <div className="avatar btn btn-circle relative h-20 w-20">
        <div className="w-20 rounded-full border-2 border-base-300">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <div className="absolute bottom-0 right-0 rounded-full border-2 border-base-300 bg-base-300 p-1 text-base-content">
          <Pencil size={10} />
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl sm:text-3xl text-base-content">
          Hello, <span className="text-nowrap">{user.name}</span>
        </h2>
      </div>
    </Link>
  );
};

export default NavHead;
