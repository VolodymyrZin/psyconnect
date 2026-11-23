import css from './PsychologistCard.module.css';
import Image from 'next/image';
import {
  IconHeart,
  IconStar,
  IconBriefcase2,
  IconWorld,
  IconChevronDown,
} from '@tabler/icons-react';
export default function PsychologistCard() {
  return (
    <li className={css.cardItem}>
      <div className={css.freeSessionBadge}>
        <svg className={css.wrapperIcon} width={12} height={12}>
          <use href="/sprite.svg#icon-gift" />
        </svg>
        Free first session
      </div>
      <div className={css.cardOverview}>
        <div className={css.wrapperImage}>
          <Image
            src={'/images/heroImage.avif'}
            width={80}
            height={80}
            alt={'session'}
          />
        </div>
        <div className={css.cardDetails}>
          <h3 className={css.name}>Name</h3>
          <ul className={css.cardInfo}>
            <li className={css.rating}>
              <IconStar stroke={2} />
              rating
            </li>
            <li className={css.experience}>
              <IconBriefcase2 stroke={2} />
              experience
            </li>
            <li className={css.language}>
              <IconWorld stroke={1} />
              language
            </li>
          </ul>
          <ul className={css.specializations}>
            <li className={css.specializationsItem}>specializationsItem</li>
          </ul>
        </div>
      </div>
      <button type="button" className={css.favourites} aria-label="favourites">
        <IconHeart stroke={2} aria-hidden="true" />
      </button>
      <p className={css.description}>description</p>
      <ul className={css.conditions}>
        <li className={css.conditionItem}>conditionItem</li>
      </ul>
      <div className={css.cardBooking}>
        <strong>90$/session</strong>
        <div>
          <button className={css.readMoreBtn} type="button">
            Read more
            <IconChevronDown stroke={2} size={24} aria-hidden="true" />
          </button>
          <button className={css.bookingBtn} type="button">
            Book a session
          </button>
        </div>
      </div>
    </li>
  );
}
