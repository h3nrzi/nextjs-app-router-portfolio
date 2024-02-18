import BlogList from '@/components/blogs/BlogList';
import PortfolioList from '@/components/portfolios/PortfolioList';

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
