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
      <div className="content-section-title">وبلاگ ها</div>
      <div className="content-list">
        {blogs.map(({ content, data }) => (
          <div key={data.slug} className="content-item">
            <div className="content-item__img-container">
              <Image
                src={data.authorImage}
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
              <Link href={`/blogs/${data.slug}`}>جزيیات بیشتر...</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
