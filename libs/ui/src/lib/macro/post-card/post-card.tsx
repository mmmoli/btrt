import { FC, ReactNode } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../core';
import { cn } from '../../utils';

export type PostCardProps = React.ComponentProps<typeof Card> & {
  post: {
    title: ReactNode;
  };
};

export const PostCard: FC<PostCardProps> = ({ post, className, ...props }) => {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-sm text-muted-foreground">
          Send notifications to device.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">click me</Button>
      </CardFooter>
    </Card>
  );
};
