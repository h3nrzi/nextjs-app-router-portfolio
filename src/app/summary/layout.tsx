import React from 'react';

interface Props {
  children: React.ReactNode;
  cv: React.ReactNode;
  aboutme: React.ReactNode;
}

const Layout = ({ children, aboutme, cv }: Props) => {
  return (
    <div>
      {children}
      {aboutme}
      {cv}
    </div>
  );
};

export default Layout;
