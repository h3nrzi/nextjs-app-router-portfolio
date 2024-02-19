'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [
  { href: '/', name: 'خانه' },
  { href: '/blogs', name: 'وبلاگها' },
  { href: '/portfolios', name: 'نمونه کارها' },
  { href: '/todos', name: 'تودوها' }
];

const Navigation = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <ul className="list">
      {links.map((link, i) => (
        <Link className={pathName === link.href ? 'active' : ''} href={link.href} key={i}>
          {link.name}
        </Link>
      ))}

      <button onClick={() => router.push('/')}>خانه</button>
    </ul>
  );
};

export default Navigation;
