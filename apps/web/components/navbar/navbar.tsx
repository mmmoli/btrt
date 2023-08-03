import { FC } from 'react';
import Link from 'next/link';
import { Button, Panel } from '@btrt/ui';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export const Navbar: FC = () => {
  return (
    <Panel asChild pattern="b">
      <nav className="flex items-center justify-between !py-0">
        <section>
          {navigation.map(({ href, name }) => (
            <Button key={href} asChild variant="ghost">
              <Link href={href}>{name}</Link>
            </Button>
          ))}
        </section>
      </nav>
    </Panel>
  );
};
