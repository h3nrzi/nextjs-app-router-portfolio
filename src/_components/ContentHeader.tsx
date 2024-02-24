import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  author: string;
  authorImage: string;
  coverImage: string;
  date: string;
}

export const ContentHeader = ({
  title,
  description,
  coverImage,
  authorImage,
  date,
  author
}: Props) => {
  return (
    <div className="blog-detail-header">
      <div className="flex flex-row justify-between mb-2">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="#">
              <span className="sr-only">{author}</span>
              <div className="relative h-10 w-10 !mb-0">
                {authorImage && (
                  <Image
                    priority
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    src={authorImage}
                    alt=""
                  />
                )}
              </div>
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 !mb-0">
              <Link href="#" className="hover:underline">
                {author}
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </div>
        <div className="flex self-end">{/* Social Links Here */}</div>
      </div>
      <h1 className="font-bold text-4xl mb-1">{title}</h1>
      <h2 className="blog-detail-header-subtitle mb-2 text-xl text-gray-600">{description}</h2>
      <div className="h-96 bg-black mx-auto w-full relative">
        <Image priority layout="fill" objectFit="cover" src={coverImage} alt="" />
      </div>
    </div>
  );
};
