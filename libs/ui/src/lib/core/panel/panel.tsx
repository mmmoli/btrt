import * as React from 'react';
import { cn } from '../../utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

export type Pattern =
  | 'none'
  | 't'
  | 'b'
  | 'l'
  | 'r'
  | 'tl'
  | 'tr'
  | 'bl'
  | 'br'
  | 'tb'
  | 'lr'
  | 'tbl'
  | 'tbr'
  | 'blr'
  | 'tlr'
  | 'tblr';

const panelVariants = cva('border-primary py-8 px-4', {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-[2vw]',
      md: 'p-[4vw]',
      lg: 'p-[6vw]',
      xl: 'p-[8vw]',
    },
  },
  defaultVariants: {
    padding: 'md',
  },
});

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  pattern?: Pattern;
  asChild?: boolean;
}

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, padding, asChild = false, pattern = 'b', ...props }, ref) => {
    const Comp = asChild ? Slot : 'section';
    return (
      <Comp
        ref={ref}
        className={cn(panelVariants({ padding, className }), {
          'border-t-2': pattern?.includes('t'),
          'border-r-2': pattern?.includes('r'),
          'border-b-2': pattern?.includes('b'),
          'border-l-2': pattern?.includes('l'),
          'border-0': pattern === 'none',
        })}
        {...props}
      />
    );
  }
);

Panel.displayName = 'Panel';
