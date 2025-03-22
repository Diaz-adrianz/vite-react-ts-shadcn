import { Lang } from '@/types/type';
import {
  BookKeyIcon,
  CreditCardIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  UsersIcon,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export interface Navigation {
  label?: Lang;
  to?: string;
  icon?: LucideIcon;
  children?: Navigation[];
}

export const Navigations: Navigation[] = [
  {
    children: [
      {
        label: { en: 'Home', id: 'Beranda' },
        to: '/',
        icon: LayoutDashboardIcon,
      },
    ],
  },
  {
    label: { en: 'Transaction', id: 'Transaksi' },
    children: [
      {
        label: { en: 'Payments', id: 'Pembayaran' },
        to: '/transaction/payments',
        icon: CreditCardIcon,
      },
    ],
  },
  {
    label: { en: 'IAM' },
    children: [
      {
        label: { en: 'Users', id: 'Pengguna' },
        to: '/iam/users',
        icon: UsersIcon,
        children: [
          {
            label: { en: 'Payments', id: 'Pembayaran' },
            to: '/transaction/payments',
            icon: CreditCardIcon,
            children: [
              {
                label: { en: 'Payments', id: 'Pembayaran' },
                to: '/transaction/payments',
                icon: CreditCardIcon,
              },
            ],
          },
        ],
      },
      {
        label: { en: 'Roles', id: 'Peran' },
        to: '/iam/roles',
        icon: KeyRoundIcon,
      },
      {
        label: { en: 'Permissions', id: 'Izin akses' },
        to: '/iam/permissions',
        icon: BookKeyIcon,
      },
    ],
  },
];
