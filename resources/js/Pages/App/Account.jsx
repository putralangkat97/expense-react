import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import AccountCard from '@/Components/Account/AccountCard';
import AppLayout from '@/Layouts/AppLayout';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const Account = ({ accounts }) => {
  //   const handleSwipe = (swiper) => {
  //     // Get the current slide's index
  //     const currentIndex = swiper.activeIndex;

  //     // Get the account ID of the current slide
  //     const currentAccountId = accounts[currentIndex].id;

  //     // Perform your desired action with the account ID
  //     console.log('Current Account ID:', currentAccountId);
  //   };

  return (
    <div className="">
      <Swiper
        grabCursor={true}
        spaceBetween={32}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {accounts.map((acc) => (
          <SwiperSlide key={acc.id}>
            <AccountCard data={acc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Account.layout = (page) => (
  <AppLayout title="Account" useNavHead={false}>
    {page}
  </AppLayout>
);

export default Account;
