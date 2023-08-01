import { allPosts } from '@btrt/content';

export const findPostForSlug = (slug: string) =>
  allPosts.find((post) => post._raw.flattenedPath === slug);

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
