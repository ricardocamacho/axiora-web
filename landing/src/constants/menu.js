import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'stores',
    icon: 'iconsminds-shop',
    label: 'menu.stores',
    to: `${adminRoot}/stores`
  },
  {
    id: 'inventory',
    icon: 'iconsminds-box-full',
    label: 'menu.inventory',
    to: `${adminRoot}/inventory`
  }
  // {
  //   id: 'gogo',
  //   icon: 'iconsminds-air-balloon-1',
  //   label: 'menu.gogo',
  //   to: `${adminRoot}/gogo`,
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.start',
  //       to: `${adminRoot}/gogo/start`
  //     }
  //   ]
  // },
  // {
  //   id: 'secondmenu',
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.second-menu',
  //   to: `${adminRoot}/second-menu`,
  //   // roles: [UserRole.Admin, UserRole.Editor],
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.second',
  //       to: `${adminRoot}/second-menu/second`
  //     }
  //   ]
  // },
  // {
  //   id: 'blankpage',
  //   icon: 'iconsminds-bucket',
  //   label: 'menu.blank-page',
  //   to: `${adminRoot}/blank-page`
  // },
  // {
  //   id: 'docs',
  //   icon: 'iconsminds-library',
  //   label: 'menu.docs',
  //   to: 'https://gogo-react-docs.coloredstrategies.com/',
  //   newWindow: true
  // }
];
export default data;
