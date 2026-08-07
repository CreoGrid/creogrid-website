'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'gradient' | 'primary' | 'ai' | 'ghost' | 'outline' | 'outline-ai';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  gradient:
    'bg-torqone-gradient text-white shadow-torqone-primary hover:shadow-torqone-ai border-0',
  primary:
    'bg-torqone-primary hover:bg-torqone-primary-hover text-white border border-torqone-primary/50',
  ai:
    'bg-torqone-ai hover:bg-torqone-ai-hover text-white border border-torqone-ai/50 shadow-torqone-ai',
  ghost:
    'bg-transparent hover:bg-torqone-primary-muted text-torqone-text-secondary hover:text-white border border-transparent',
  outline:
    'bg-transparent hover:bg-torqone-primary-muted text-torqone-text border border-torqone-border hover:border-torqone-primary',
  'outline-ai':
    'bg-transparent hover:bg-torqone-ai-muted text-torqone-text border border-torqone-ai/40 hover:border-torqone-ai',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:  'h-8  px-4  text-xs  rounded-lg  gap-1.5',
  md:  'h-10 px-5  text-sm  rounded-lg  gap-2',
  lg:  'h-12 px-7  text-sm  rounded-xl  gap-2.5',
  xl:  'h-14 px-9  text-base rounded-xl  gap-3',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        whileHover={isDisabled ? {} : { scale: 1.02, y: -1 }}
        whileTap={isDisabled ? {} : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          'relative inline-flex items-center justify-center font-semibold',
          'transition-all duration-200 select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-torqone-primary focus-visible:ring-offset-2 focus-visible:ring-offset-torqone-background',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={isDisabled}
        {...(props as any)}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-black/20">
            <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          </span>
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && !loading && (
          <span className="shrink-0">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
