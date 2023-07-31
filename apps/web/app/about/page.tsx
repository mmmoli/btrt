import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Michele Memoli',
};

const AboutPage: NextPage = () => {
  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <h1>About</h1>
        <p>Words about Michele</p>
      </div>
    </article>
  );
};

export default AboutPage;
