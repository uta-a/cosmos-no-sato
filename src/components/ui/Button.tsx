import type { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'primary' | 'outline';
  icon?: string;
}

export default function Button({
  variant = 'primary',
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </a>
  );
}
