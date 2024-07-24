import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

const buttonVariants = cva(
  'group inline-flex items-center w-fit rounded-lg bg-opacity-75 hover:bg-opacity-100 border px-8 py-3 font-medium text-sm tracking-wider disabled:opacity-50 hover:scale-105 disabled:scale-100 transition-all duration-300 md:text-base',
  {
    variants: {
      variant: {
        info: 'border-blue-600 text-white bg-blue-500 hover:bg-blue-600  disabled:hover:border-blue-300',
        success:
          'border-green-600 text-white bg-green-500 hover:bg-green-600  disabled:hover:border-green-300',
        warning:
          'border-yellow-600 text-primary bg-yellow-500 hover:bg-yellow-600  disabled:hover:border-yellow-300',
        danger:
          'border-red-600 text-white bg-red-500 hover:bg-red-600  disabled:hover:border-red-300',
        inverse:
          'border-neutral-500 text-white bg-primary hover:bg-white disabled:hover:bg-primary hover:text-black disabled:hover:text-white disabled:hover:border-neutral-500',
        default:
          'border-white bg-white text-black disabled:border-white disabled:bg-white disabled:text-black'
      }
    }
  }
);

interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

interface LinkProps extends NextLinkProps, VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  className?: string;
}

export function Button({
  children,
  variant,
  className,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
}

export function Link({
  children,
  variant,
  className,
  ...props
}: Readonly<LinkProps>) {
  return (
    <NextLink {...props} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </NextLink>
  );
}
