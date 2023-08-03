import { allPosts } from '@btrt/content';

export const findPostForSlug = (slug: string) =>
  allPosts.find((post) => post._raw.flattenedPath === `posts/${slug}`);

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: `posts/${post._raw.flattenedPath}` }));
