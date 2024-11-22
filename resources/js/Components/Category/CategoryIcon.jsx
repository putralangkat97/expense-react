import {
  Banknote,
  Bike,
  Bus,
  Cable,
  Car,
  CreditCard,
  CupSoda,
  Donut,
  Drama,
  Eye,
  Film,
  Gift,
  GraduationCap,
  HandCoins,
  Handshake,
  Heart,
  House,
  ReceiptText,
  Salad,
  Shirt,
  ShoppingCart,
  SmartphoneNfc,
  Store,
  SwitchCamera,
} from 'lucide-react';

const CategoryIcon = ({ category = 'bill', size = 22 }) => {
  let iconComponent = <ReceiptText size={size} />;
  switch (category.toLowerCase()) {
    case 'food':
      iconComponent = <Salad size={size} />;
      break;
    case 'drink':
      iconComponent = <CupSoda size={size} />;
      break;
    case 'snack':
      iconComponent = <Donut size={size} />;
      break;
    case 'saving':
      iconComponent = <HandCoins size={size} />;
      break;
    case 'transportation':
      iconComponent = <Bus size={size} />;
      break;
    case 'movie':
      iconComponent = <Film size={size} />;
      break;
    case 'shopping':
      iconComponent = <ShoppingCart size={size} />;
      break;
    case 'online payment':
      iconComponent = <CreditCard size={size} />;
      break;
    case 'market':
      iconComponent = <Store size={size} />;
      break;
    case 'home':
      iconComponent = <House size={size} />;
      break;
    case 'health':
      iconComponent = <Heart size={size} />;
      break;
    case 'entertaiment':
      iconComponent = <Drama size={size} />;
      break;
    case 'electronic':
      iconComponent = <Cable size={size} />;
      break;
    case 'education':
      iconComponent = <GraduationCap size={size} />;
      break;
    case 'clothing':
      iconComponent = <Shirt size={size} />;
      break;
    case 'car':
      iconComponent = <Car size={size} />;
      break;
    case 'motorbike':
      iconComponent = <Bike size={size} />;
      break;
    case 'beauty':
      iconComponent = <Eye size={size} />;
      break;
    case 'top up':
      iconComponent = <SmartphoneNfc size={size} />;
      break;
    case 'gift':
      iconComponent = <Gift size={size} />;
      break;
    case 'salary':
      iconComponent = <Banknote size={size} />;
      break;
    case 'refund':
      iconComponent = <SwitchCamera size={size} />;
      break;
    case 'owe':
      iconComponent = <Handshake size={size} />;
      break;
    default:
      iconComponent = <ReceiptText size={size} />;
      break;
  }

  return iconComponent;
};

export default CategoryIcon;
