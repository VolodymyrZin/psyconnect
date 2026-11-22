import Logo from '../Logo/Logo';
import css from './Header.module.css';
import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <div className={`container ${css.headerContainer}`}>
        <Logo variant="header" />
        <nav className={css.navMain} aria-label="Main navigation">
          <ul className={css.navList}>
            <li>
              <Link href="/" className={css.navHomeLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/psychologists" className={css.navPsyLink}>
                Psychologists
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={css.navAccount} aria-label="Account navigation">
          <ul className={css.navAccountList}>
            <li>
              <Link href="/auth/login" className={css.loginLink}>
                Log In
              </Link>
            </li>
            <li>
              <Link href="/auth/register" className={css.registerLink}>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
