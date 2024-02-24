import { getBlogs } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

// interface BlogPostData {
//   title: string;
//   description: string;
//   author: string;
//   authorImage: string;
//   coverImage: string;
//   date: string;
// }

// interface BlogPost {
//   content: string;
//   data: BlogPostData;
//   isEmpty: boolean;
//   excerpt: string;
// }

const BlogList = () => {
  const blogs = getBlogs();

  return (
    <>
      <div className="mb-14">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {blogs.map(({ data, content }) => (
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
                  <Link href={`/blogs/${data.slug}`}>
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

export default BlogList;
