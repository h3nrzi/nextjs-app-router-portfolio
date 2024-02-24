import { ContentHeader } from '@/_components/ContentHeader';
import { getPortfolioSlug, getPortfolios } from '@/utils';
import React from 'react';

export function generateStaticParams() {
  const portfolios = getPortfolios();
  return portfolios.map((p) => ({ slug: p.data.slug }));
}

const PortfolioDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { data, content } = await getPortfolioSlug(params.slug);

  return (
    <div>
      <ContentHeader
        title={data.title}
        description={data.description}
        author={data.author}
        authorImage={data.authorImage}
        coverImage={data.coverImage}
        date={data.portfolio}
      />
      <article className="prose lg:prose-xl m-auto">
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </div>
  );
};

export default PortfolioDetailPage;
