import { getPortfolioSlug, getPortfolios } from '@/utils';
import React from 'react';

export function generateStaticParams() {
  const portfolios = getPortfolios();
  return portfolios.map((p) => ({ slug: p.data.slug }));
}

const PortfolioDetailPage = async ({ params }: { params: { slug: string } }) => {
  const portfolio = await getPortfolioSlug(params.slug);

  return (
    <div>
      <div>{portfolio.data.title}</div>
      <div>{portfolio.data.description}</div>
      <hr />
      <div className="text-justify" dangerouslySetInnerHTML={{ __html: portfolio.content }}></div>
    </div>
  );
};

export default PortfolioDetailPage;
