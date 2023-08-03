import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from '@btrt/content';
import { Button, Panel, PostCard } from '@btrt/ui';
import { title } from 'process';

/*
function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Button asChild variant="link">
          <Link
            href={post.url}
            className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
          >
            {post.title}
          </Link>
        </Button>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  );
}
*/

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <Panel>
        <h1 className="text-primary text-8xl md:text-9xl my-8">
          Build the
          <br /> Right Thing
        </h1>
        <p className="text-2xl">
          Tech Entrepreneur framework for fewer mistakes.
        </p>
      </Panel>
      <Panel>
        <h2 className="text-primary text-4xl">Blog</h2>

        <div className="grid grid-rows-4 grid-flow-col gap-4">
          {posts.map((post, idx) => (
            <PostCard key={idx} post={post} />
          ))}
        </div>
      </Panel>
    </div>
  );
}
