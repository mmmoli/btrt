import { notFound } from 'next/navigation';
import { findPostForSlug } from '../content';

export interface usePostsPageParams {
  slug: string;
}

export const usePostsPage = (params: usePostsPageParams) => {
  const maybePost = findPostForSlug(params.slug);
  if (!maybePost) return notFound();
  const post = maybePost;

  return { post };
};
