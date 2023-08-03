import { Button } from '@btrt/ui';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Michele Memoli',
};

const AboutPage: NextPage = () => {
  return (
    <article className="py-8 mx-auto">
      <div className="mb-8 text-center">
        <h1>About</h1>
        <p>Words about Michele</p>
        <div className="p-8 my-7">
          <div className="flex space-x-2 items-center mb-4">
            <Button>Click Me</Button>
            <Button variant="destructive">Click Me</Button>
            <Button variant="outline">Outline words really long here</Button>
            <Button variant="ghost">Meet</Button>
            <Button variant="link">Click me</Button>
          </div>
          <div className="flex space-x-2 items-center">
            <Button size={'sm'}>Click Me</Button>
            <Button size={'md'}>Click Me</Button>
            <Button size={'lg'}>Click Me</Button>
            <Button size={'icon'}>Click Me</Button>
          </div>
        </div>

        <div className="p-8 my-8 dark bg-background text-foreground">
          <div className="flex space-x-2 items-center mb-4">
            <Button>Click Me</Button>
            <Button variant="destructive">Click Me</Button>
            <Button variant="outline">Outline words really long here</Button>
            <Button variant="ghost">Meet</Button>
            <Button variant="link">Click me</Button>
          </div>
          <div className="flex space-x-2 items-center">
            <Button size={'sm'}>Click Me</Button>
            <Button size={'md'}>Click Me</Button>
            <Button size={'lg'}>Click Me</Button>
            <Button size={'icon'}>Click Me</Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutPage;
