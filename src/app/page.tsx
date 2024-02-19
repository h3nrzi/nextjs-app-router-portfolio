import BlogList from '@/components/blogs/BlogList';
import PortfolioList from '@/components/portfolios/PortfolioList';
import Link from 'next/link';

const Home = async () => {
  return (
    <>
      <BlogList />
      <PortfolioList />
    </>
  );
};

export const revalidate = 2;
export default Home;
