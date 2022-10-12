import { BiUser } from 'react-icons/bi';
import { FiUsers, FiSave } from 'react-icons/fi';
import {
  FaHandshakeSlash,
  FaUser,
  FaHouseDamage,
  FaUserCheck,
  FaHandHoldingHeart,
} from 'react-icons/fa';
import {
  MdOutlineSavings,
  MdSettingsInputComposite,
  MdPermDataSetting,
} from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';
import {
  GiSwapBag,
  GiHamburger,
  GiCircularSawblade,
  GiPapers,
  GiNetworkBars,
} from 'react-icons/gi';
import { RiShoppingBag3Line } from 'react-icons/ri';

export const Links = [
  {
    id: 1,
    title: 'CUSTOMERS',
    links: [
      {
        index: 1,
        name: 'Users',
        icon: <BiUser />,
      },
      {
        index: 2,

        name: 'Guarantors',
        icon: <FiUsers />,
      },
      {
        index: 3,

        name: 'Loans',
        icon: <GiSwapBag />,
      },
      {
        index: 4,

        name: 'Decision Models',
        icon: <FaHandshakeSlash />,
      },
      {
        index: 5,

        name: 'Savings',
        icon: <MdOutlineSavings />,
      },
      {
        index: 6,

        name: 'Loan Requests',
        icon: <FaHandHoldingHeart />,
      },
      {
        index: 7,

        name: 'Whitelist',
        icon: <FaUserCheck />,
      },
      {
        index: 8,

        name: 'Karma',
        icon: <FaUserCheck />,
      },
    ],
  },
  {
    id: 2,
    title: 'BUSINESSES',
    links: [
      {
        index: 9,
        name: 'Organization',
        icon: <FaHouseDamage />,
      },
      {
        index: 10,

        name: 'Loan Products',
        icon: <FaHandHoldingHeart />,
      },
      {
        index: 11,

        name: 'Savings Products',
        icon: <AiOutlineSave />,
      },
      {
        index: 12,

        name: 'Fees and Charges',
        icon: <GiHamburger />,
      },
      {
        index: 13,

        name: 'Transactions',
        icon: <FiSave />,
      },
      {
        index: 14,

        name: 'Services',
        icon: <GiCircularSawblade />,
      },
      {
        index: 15,

        name: 'Services Account',
        icon: <FaUser />,
      },
      {
        index: 16,

        name: 'Settlements',
        icon: <GiPapers />,
      },
      {
        index: 17,

        name: 'Reports',
        icon: <GiNetworkBars />,
      },
    ],
  },
  {
    id: 3,
    title: 'SETTINGS',
    links: [
      {
        index: 18,

        name: 'Preferences',
        icon: <MdSettingsInputComposite />,
      },
      {
        index: 19,

        name: 'Fees and Pricing',
        icon: <MdPermDataSetting />,
      },
      {
        index: 20,

        name: 'Audit Logs',
        icon: <RiShoppingBag3Line />,
      },
    ],
  },
];
