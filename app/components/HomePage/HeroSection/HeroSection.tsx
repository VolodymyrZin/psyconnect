import css from './HeroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconShieldFilled,
  IconCheck,
  IconStarFilled,
} from '@tabler/icons-react';
export default function HeroSection() {
  return (
    <section className={css.wrapperHero}>
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
        <div className={css.badgeTop}>
          <div className={css.ovalBgrShield}>
            <IconShieldFilled
              size={20}
              color="#0F5238"
              className={css.shieldIcon}
            />
            <IconCheck color="#a0f4c8" stroke={4} className={css.tickIcon} />
          </div>
          <div className={css.badgeText}>Licensed Specialists</div>
        </div>
        <Image
          src={'/images/heroImage.avif'}
          className={css.image}
          width={630}
          height={498}
          alt="woman psychologist"
          loading="eager"
        />
        <div className={css.badgeBottom}>
          <div className={css.circleBgrStar}>
            <IconStarFilled
              size={20}
              color="#EAB308"
              className={css.starIcon}
            />
          </div>
          <div>4.8 Average Rating</div>
        </div>
      </div>
    </section>
  );
}
