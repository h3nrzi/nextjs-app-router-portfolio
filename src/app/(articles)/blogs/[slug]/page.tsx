import { ContentHeader } from '@/_components/ContentHeader';
import { getBlogSlug, getBlogs } from '@/utils';
import React from 'react';

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((b) => ({ slug: b.data.slug }));
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { data, content } = await getBlogSlug(params.slug);

  return (
    <div dir={data.dir}>
      <ContentHeader
        title={data.title}
        description={data.description}
        author={data.author}
        authorImage={data.authorImage}
        coverImage={data.coverImage}
        date={data.date}
      />
      <article className="prose lg:prose-lg m-auto">
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
