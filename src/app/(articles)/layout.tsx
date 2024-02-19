import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="portfolios-page-wrapper">{children}</div>;
};

export default Layout;
