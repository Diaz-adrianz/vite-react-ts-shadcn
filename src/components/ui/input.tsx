import * as React from 'react';

import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Label } from './label';
import { capitalizeFirstLetter } from '@/utils/string';

const inputVariants = cva(
  cn(
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0  border bg-transparent px-3 py-1 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    'focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-2',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
  ),
  {
    variants: {
      dimen: {
        sm: 'h-9 text-sm rounded-md px-4 py-2',
        md: 'h-8 text-base rounded-md gap-1.5 px-3',
        lg: 'h-10 text-md rounded-md px-6',
      },
    },
    defaultVariants: {
      dimen: 'sm',
    },
  }
);

function Input({
  className,
  type,
  dimen,
  label,
  description,
  error,
  slotLeft,
  slotRight,
  slotTop,
  ...props
}: React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    description?: string;
    error?: string;
    slotLeft?: React.ReactNode;
    slotRight?: React.ReactNode;
    slotTop?: React.ReactNode;
  }) {
  return (
    <div className="grid gap-2">
      {(label || slotTop) && (
        <div className="flex items-center justify-between">
          <Label htmlFor={props.name}>{capitalizeFirstLetter(label)}</Label>
          {slotTop}
        </div>
      )}
      <div className="flex gap-2">
        {slotLeft}
        <input
          type={type}
          data-slot="input"
          className={cn(inputVariants({ dimen }), 'grow', className)}
          {...props}
        />
        {slotRight}
      </div>
      {description && <small>{description}</small>}
      {error && <small className="text-destructive">{error}</small>}
    </div>
  );
}

export { Input, inputVariants };
