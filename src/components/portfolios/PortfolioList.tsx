import { getPortfolios } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

// interface Portfolio {
//   id: string;
//   slug: string;
//   title: string;
//   description: string;
//   coverImage: string;
// }

const PortfolioList = async () => {
  const portfolios = getPortfolios();

  return (
    <>
      <div className="content-section-title">نمونه کارها</div>
      <div className="content-list">
        {portfolios.map(({ data, content }) => (
          <div className="content-item" key={data.slug}>
            <div className="content-item__img-container">
              <Image
                src={data.coverImage}
                alt={data.title}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px)"
                fill
                priority
              />
            </div>
            <div className="content-item__header">
              <div>{data.title}</div>
              <div>{data.description}</div>
              <Link href={`/portfolios/${data.slug}`}>جزيیات بیشتر...</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioList;
