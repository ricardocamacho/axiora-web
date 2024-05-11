// export default function Layout({ children }: { children: React.ReactNode }) {
//     return (
//         <main>
//             { children }
//         </main>
//     )
// }

import React from 'react';
import { connect } from 'react-redux';

import TopNav from '@/containers/Topnav'
import Sidebar from '@/containers/Sidebar'
import Footer from '@/containers/Footer'
import Link from 'next/link';

const AppLayout = ({ containerClassnames, children, history }) => {
  return (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={history} />
      <Sidebar />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default Link(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);