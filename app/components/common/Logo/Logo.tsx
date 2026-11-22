import Link from 'next/link';
import css from './Logo.module.css';
export type LogoVariant = 'header' | 'footer';
export interface LogoProps {
  variant: LogoVariant;
}
export default function Logo({ variant }: LogoProps) {
  return (
    <Link href="/" className={`${css.logo} ${css[variant]} `}>
      <svg className={css.logoIcon} aria-hidden="true">
        <use href="/sprite.svg#icon-logo" />
      </svg>
      <span className={css.logoText}>PsyConnect</span>
    </Link>
  );
}
