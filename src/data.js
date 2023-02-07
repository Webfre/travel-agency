import { AiFillHome } from 'react-icons/ai';
import { FaServicestack } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import { RiContactsBook2Fill } from 'react-icons/ri';

export const links = [
  {
    name: 'Home',
    path: '/',
    icon: <AiFillHome />,
  },
  {
    name: 'About',
    path: '/about',
    icon: <BsInfoCircleFill />,
  },
  {
    name: 'Servise',
    path: '/servise',
    icon: <FaServicestack />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <RiContactsBook2Fill />,
  },
];