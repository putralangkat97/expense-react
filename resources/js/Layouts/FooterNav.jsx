import { Link, usePage } from '@inertiajs/react';
import {
  ChartNoAxesCombined,
  CircleUserRound,
  Home,
  ScrollText,
  WalletMinimal,
} from 'lucide-react';

const FooterNav = () => {
  const { url } = usePage();

  return (
    <div className="h-18 fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 transform border-t-2 border-primary bg-base-100 shadow-md transition-transform duration-300 sm:h-20">
      <div className="flex justify-around space-x-1.5 px-2 py-2 sm:-mt-0.5">
        <Link
          prefetch="click"
          href={route('home')}
          className={
            'rounded-full border-x-2 border-b-4 border-t-2 p-2 transition-colors duration-200 ' +
            (url.startsWith('/home')
              ? 'border-primary bg-primary/70 text-base-100'
              : 'border-transparent bg-transparent text-neutral')
          }
        >
          <Home size={32} />
        </Link>
        <Link
          prefetch="click"
          href={route('account.index')}
          className={
            'rounded-full border-x-2 border-b-4 border-t-2 p-2 transition-colors duration-200 ' +
            (url.startsWith('/account')
              ? 'border-primary bg-primary/70 text-base-100'
              : 'border-transparent bg-transparent text-neutral')
          }
        >
          <WalletMinimal size={32} />
        </Link>
        <Link
          prefetch="click"
          href={route('transaction.index')}
          className={
            'rounded-full border-x-2 border-b-4 border-t-2 p-2 transition-colors duration-200 ' +
            (url.startsWith('/transaction')
              ? 'border-primary bg-primary/70 text-base-100'
              : 'border-transparent bg-transparent text-neutral')
          }
        >
          <ScrollText size={32} />
        </Link>
        <Link
          prefetch="click"
          href={route('report.index')}
          className={
            'rounded-full border-x-2 border-b-4 border-t-2 p-2 transition-colors duration-200 ' +
            (url.startsWith('/report')
              ? 'border-primary bg-primary/70 text-base-100'
              : 'border-transparent bg-transparent text-neutral')
          }
        >
          <ChartNoAxesCombined size={32} />
        </Link>
        <Link
          prefetch="click"
          href={route('profile.index')}
          className={
            'rounded-full border-x-2 border-b-4 border-t-2 p-2 transition-colors duration-200 ' +
            (url.startsWith('/profile')
              ? 'border-primary bg-primary/70 text-base-100'
              : 'border-transparent bg-transparent text-neutral')
          }
        >
          <CircleUserRound size={32} />
        </Link>
      </div>
    </div>
  );
};

export default FooterNav;
