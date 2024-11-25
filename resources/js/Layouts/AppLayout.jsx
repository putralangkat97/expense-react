import NavHead from '@/Components/Home/NavHead';
import { Head, Link, usePage } from '@inertiajs/react';
import {
  CircleUserRound,
  Home,
  ReceiptText,
  WalletMinimal,
} from 'lucide-react';

export default function AppLayout({
  title = 'App',
  children,
  useNavHead = true,
}) {
  const user = usePage().props.auth.user;
  const { url } = usePage();

  return (
    <>
      <Head title={title} />
      <div className="min-h-screen bg-base-100">
        <div className="mx-auto w-full px-6 pb-36 pt-10 sm:max-w-md">
          {/* header nav */}
          {useNavHead && <NavHead user={user} />}

          {/* main content */}
          <main className="mt-10">{children}</main>

          {/* footer nav */}
          <div className="h-18 fixed bottom-0 left-1/2 z-50 w-[290px] -translate-x-1/2 transform rounded-full border-x-2 border-b-4 border-t-2 border-primary bg-base-100 shadow-md transition-transform duration-300 sm:w-full sm:max-w-3xl">
            <div className="flex justify-evenly px-2 py-2">
              <Link
                prefetch
                href={route('home')}
                className={
                  'rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 hover:border-primary hover:bg-primary/70 hover:text-base-200 ' +
                  (url.startsWith('/home')
                    ? 'border-primary bg-primary/70 text-base-200'
                    : 'border-transparent bg-transparent text-neutral')
                }
              >
                <Home size={32} />
              </Link>
              <Link
                prefetch
                href={route('account.index')}
                className={
                  'rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 hover:border-primary hover:bg-primary/70 hover:text-base-200 ' +
                  (url.startsWith('/account')
                    ? 'border-primary bg-primary/70 text-base-200'
                    : 'border-transparent bg-transparent text-neutral')
                }
              >
                <WalletMinimal size={32} />
              </Link>
              <Link
                prefetch
                href={'#'}
                className={
                  'rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 hover:border-primary hover:bg-primary/70 hover:text-base-200 ' +
                  (url.startsWith('/transaction')
                    ? 'border-primary bg-primary/70 text-base-200'
                    : 'border-transparent bg-transparent text-neutral')
                }
              >
                <ReceiptText size={32} />
              </Link>
              <Link
                prefetch
                href={route('profile.index')}
                className={
                  'rounded-full border-x-2 border-b-4 border-t-2 p-3 transition-colors duration-200 hover:border-primary hover:bg-primary/70 hover:text-base-200 ' +
                  (url.startsWith('/profile')
                    ? 'border-primary bg-primary/70 text-base-200'
                    : 'border-transparent bg-transparent text-neutral')
                }
              >
                <CircleUserRound size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
