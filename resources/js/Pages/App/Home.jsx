import AccountCard from '@/Components/Account/AccountCard';
import BottomSheet from '@/Components/BottomSheet';
import Divider from '@/Components/Divider';
import TotalBalance from '@/Components/Home/TotalBalance';
import TransactionButton from '@/Components/Home/TransactionButton';
import TransactionCard from '@/Components/Transactions/TransactionCard';
import TransactionDetail from '@/Components/Transactions/TransactionDetail';
import TransactionForm from '@/Components/Transactions/TransactionForm';
import AppLayout from '@/Layouts/AppLayout';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Home = ({ totalBalance, transactions, categories, accounts }) => {
  const { flash } = usePage().props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [isForm, setIsForm] = useState(false);
  const [categoryType, setCategoryType] = useState('out');

  const openModal = (
    title = modalTitle,
    transaction = null,
    type = null,
    edit = false,
  ) => {
    setIsModalOpen(true);
    setModalTitle(title);
    if (type === 'transaction-detail') {
      setIsForm(false);
      setSelectedTransaction(transaction);
    } else {
      setIsForm(true);
      if (edit) {
        setSelectedTransaction(transaction);
      }
      if (type === 'transaction-out') {
        setCategoryType('out');
      } else {
        setCategoryType('in');
      }
    }
  };

  const closeModal = () => {
    setIsForm(false);
    setIsModalOpen(false);
    setModalTitle('');
    setCategoryType('');
    setSelectedTransaction(null);
  };

  return (
    <>
      {/* balance */}
      <div className="card card-compact border-x-2 border-b-4 border-t-2 border-primary bg-base-200">
        <div className="card-body">
          {/* total balance */}
          <TotalBalance totalBalance={totalBalance} />
          <Divider className={'my-2'} />
          <TransactionButton triggerModal={openModal} />
        </div>
      </div>

      {/* Account List */}
      <div className="mt-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold text-neutral sm:text-2xl">
            Accounts
          </h2>
          <Link
            href={route('account.index')}
            className="transition-colors duration-200 hover:link hover:link-primary"
          >
            View all
          </Link>
        </div>
        <div className="mt-4">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {accounts.map((acc, key) => (
              <SwiperSlide key={acc.id}>
                <AccountCard data={acc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="mt-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold text-neutral sm:text-2xl">
            Recent Transactions
          </h2>
          <Link
            href={'#'}
            className="transition-colors duration-200 hover:link hover:link-primary"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          {transactions.map((data, key) => (
            <TransactionCard
              data={data}
              key={key}
              onClick={() =>
                openModal('Transaction Detail', data, 'transaction-detail')
              }
            />
          ))}
        </div>
      </div>

      <BottomSheet isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        {isForm ? (
          <TransactionForm
            accounts={accounts}
            categories={categories}
            categoryType={categoryType}
            transactionData={selectedTransaction}
            closeModal={closeModal}
          />
        ) : (
          selectedTransaction && (
            <TransactionDetail
              data={selectedTransaction}
              triggerModal={openModal}
            />
          )
        )}
      </BottomSheet>
    </>
  );
};

Home.layout = (page) => <AppLayout title={'Home'}>{page}</AppLayout>;

export default Home;
