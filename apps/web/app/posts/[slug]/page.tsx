import { format, parseISO } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { usePostsPage } from './use-posts-page';
import { Metadata, NextPage } from 'next';
import { findPostForSlug, generateStaticParams } from '../content';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export { generateStaticParams };

export interface AllPostsPageProps {
  params: { slug: string };
}

export const generateMetadata = ({ params }: AllPostsPageProps): Metadata => {
  const maybePost = findPostForSlug(params.slug);
  if (!maybePost) return notFound();
  const post = maybePost;
  return { title: post.title };
};

const AllPostsPage: NextPage<AllPostsPageProps> = ({ params }) => {
  const { post } = usePostsPage(params);
  const Content = useMDXComponent(post.body.code);

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
        <div className="flex space-x-1">
          {post.tags.map((tag) => (
            <span key={tag}>
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </span>
          ))}
        </div>
      </div>
      <Content />
    </article>
  );
};

export default AllPostsPage;
