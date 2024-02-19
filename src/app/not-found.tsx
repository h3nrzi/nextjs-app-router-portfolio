import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      <div>این صفحه یافت نشد</div>
      <Link href="/">خانه</Link>
    </div>
  );
};

export default NotFoundPage;
