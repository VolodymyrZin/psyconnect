import Logo from '../Logo/Logo';
import css from './Footer.module.css';
export default function Footer() {
  return (
    <footer>
      <div className={`container ${css.footerContainer}`}>
        <Logo variant="footer" />
        <p className={css.copyright}>
          &copy; {new Date().getFullYear()} PsyConnect. All rights reserved
        </p>
        <ul className={css.socialList}>
          <li className={css.socialItem}>
            <a
              href="https://youtube.com"
              className={css.socialLink}
              aria-label="YouTube"
            >
              <svg
                className={css.socialIcon}
                width={24}
                height={24}
                aria-hidden="true"
              >
                <use href="/sprite.svg#icon-youtube" />
              </svg>
            </a>
          </li>
          <li className={css.socialItem}>
            <a
              href="https://facebook.com"
              className={css.socialLink}
              aria-label="Facebook"
            >
              <svg
                className={css.socialIcon}
                width={24}
                height={24}
                aria-hidden="true"
              >
                <use href="/sprite.svg#icon-facebook" />
              </svg>
            </a>
          </li>
          <li className={css.socialItem}>
            <a
              href="https://instagram.com"
              className={css.socialLink}
              aria-label="Instagram"
            >
              <svg
                className={css.socialIcon}
                width={24}
                height={24}
                aria-hidden="true"
              >
                <use href="/sprite.svg#icon-instagram" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
