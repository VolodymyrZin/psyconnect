import css from './HeroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <main className={css.wrapperHero}>
      <div className={css.textHero}>
        <span className={css.heroBadge}>
          <svg
            className={css.iconBadge}
            width={15}
            height={14}
            aria-hidden="true"
          >
            <use href="/sprite.svg#icon-mental-health" />
          </svg>
          <span className={css.heroBadgeText}>Your mental health matters</span>
        </span>
        <h1 className={css.title}>Find Your Perfect Psychologist Online</h1>
        <p className={css.titleText}>
          Connect with licensed therapists and coaches who understand your
          needs. Start your journey to better mental health today.
        </p>
        <Link href="/psychologists" className={css.psyLink}>
          Get Started
          <svg
            className={css.arrowIcon}
            width={12}
            height={12}
            aria-hidden="true"
          >
            <use href="/sprite.svg#icon-arrow" />
          </svg>
        </Link>
      </div>
      <div className={css.imageHero}>
        <Image
          src={'/images/heroImage.avif'}
          className={css.image}
          width={630}
          height={498}
          alt="woman psychologist"
          loading="eager"
        />
      </div>
    </main>
  );
}
