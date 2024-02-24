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
      <div className="mb-14">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {portfolios.map(({ data, content }) => (
            <div
              dir={data.dir}
              key={data.id}
              data-tip
              data-for={`course-${data.slug}`}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
              <div className="bg-gray-200 group-hover:opacity-75 sm:aspect-none h-56 relative">
                <Image src={data.coverImage} alt={data.title} sizes="(max-width: 768px)" fill />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`/portfolios/${data.slug}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{data.description}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <Link
                    target="_"
                    href="/"
                    className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                    جزيیات بیشتر
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioList;
