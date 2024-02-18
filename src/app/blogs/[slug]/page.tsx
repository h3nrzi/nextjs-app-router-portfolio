import { getBlogSlug, getBlogs } from '@/utils';
import React from 'react';

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((b) => ({ slug: b.data.slug }));
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogSlug(params.slug);

  return (
    <div dir={blog.data.dir}>
      <div>{blog.data.title}</div>
      <div>{blog.data.description}</div>
      <hr />
      <div className="text-justify" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
};

export default BlogDetailPage;
