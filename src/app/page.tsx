import Hero from '@/_components/Hero';
import Title from '@/_components/Title';
import BlogList from '@/_components/blogs/BlogList';
import PortfolioList from '@/_components/portfolios/PortfolioList';
import { getContentCount } from '@/utils';

const Home = async () => {
  const count = getContentCount();

  return (
    <>
      <Hero count={count} />
      <Title title="وبلاگ ها" link="/blogs" />
      <BlogList />
      <Title title="نمونه کارها" link="/portfolios" />
      <PortfolioList />
    </>
  );
};

export const revalidate = 2;
export default Home;
