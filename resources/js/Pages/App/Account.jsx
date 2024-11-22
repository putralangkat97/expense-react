import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import AccountCard from '@/Components/Account/AccountCard';
import AppLayout from '@/Layouts/AppLayout';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

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
  );
};

Account.layout = (page) => (
  <AppLayout title="Account" useNavHead={false}>
    {page}
  </AppLayout>
);

export default Account;
