import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-white shadow-[0_0_24px_rgb(59_130_246/0.35)] hover:bg-accent-soft hover:shadow-[0_0_36px_rgb(59_130_246/0.5)] hover:-translate-y-0.5',
        gradient:
          'bg-gradient-to-r from-accent via-brand-violet to-brand-cyan bg-[length:200%_auto] text-white shadow-[0_0_28px_rgb(124_58_237/0.35)] hover:bg-right hover:-translate-y-0.5',
        secondary:
          'glass text-slate-200 hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-0.5',
        ghost: 'text-muted hover:text-white hover:bg-white/[0.05]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = 'Button';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
