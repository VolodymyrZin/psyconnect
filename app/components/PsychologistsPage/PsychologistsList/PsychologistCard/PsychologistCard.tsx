'use client';
import css from './PsychologistCard.module.css';
import Image from 'next/image';
import {
  IconHeart,
  IconStar,
  IconBriefcase2,
  IconWorld,
  IconChevronDown,
} from '@tabler/icons-react';

import type { PsychologistModalData } from '@/app/types/psychologist';
import { useModalStore } from '@/app/store/modalStore';
export default function PsychologistCard({
  id,
  name,
  avatar_url,
}: PsychologistModalData) {
  const openBooking = useModalStore(state => state.openBooking);
  const handleBookingClick = () => {
    openBooking({ id, name, avatar_url });
  };
  return (
    <li className={`${css.cardItem} ${css.expanded}`}>
      <div className={css.freeSessionBadge}>
        <svg
          className={css.wrapperIcon}
          width={12}
          height={12}
          aria-hidden="true"
        >
          <use href="/sprite.svg#icon-gift" />
        </svg>
        <span className={css.badgeText}>Free first session</span>
      </div>
      <div className={css.cardOverview}>
        <div className={css.wrapperImage}>
          <Image
            src={avatar_url}
            width={80}
            height={80}
            alt={name}
            className={css.image}
          />
        </div>
        <div className={css.cardDetails}>
          <h3 className={css.name}>{name}</h3>
          <ul className={css.cardInfoList}>
            <li className={css.cardInfoItem}>
              <IconStar stroke={2} size={12} color="#FBBF24" />
              <span className={css.cardInfoText}>4.9</span>
            </li>
            <li className={css.cardInfoItem}>
              <IconBriefcase2 stroke={2} size={12} />
              <span className={css.cardInfoText}>8 yrs exp.</span>
            </li>
            <li className={css.cardInfoItem}>
              <IconWorld stroke={1} size={12} />
              <span className={css.cardInfoText}>EV/UA</span>
            </li>
          </ul>
          <ul className={css.specializationsList}>
            <li className={css.specializationsItem}>specializationsItem</li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        className={css.favourites}
        aria-label="Add to favorites"
      >
        <IconHeart stroke={2} aria-hidden="true" color="#707973" />
      </button>
      <p className={css.description}>
        flex-shrink визначає здатність flex-елемента займати менше місця
        (стискатися), ніж його початковий розмір, тобто впливає на фінальний
        розмір елемента. Щоб елемент іконки зайняв необхідні 40px за шириною,
        достатньо заборонити йому стискатися, задавши flex-shrink: 0. Так
        flex-контейнер виділить рівно 40px під іконку, а решту місця в рядку
        займе абзац із текстом.
      </p>
      <ul className={css.conditionList}>
        <li className={css.conditionItem}>conditionItem</li>
      </ul>
      <div className={css.approaches}>
        <p className={css.approachesTitle}>Therapeutic Approaches</p>
        <ul className={css.approachesList}>
          <li className={css.approachesItem}>approachItem</li>
          <li className={css.approachesItem}>approachItem</li>
        </ul>
      </div>
      <div className={css.reviews}>
        <p className={css.reviewsTitle}>Client Reviews</p>
        <ul className={css.reviewsList}>
          <li className={css.reviewsItem}>
            <div className={css.reviewer}>
              <div className={css.reviewerInfo}>
                <span className={css.reviewerLogo}>A.M.</span>
                <div className={css.reviewerMark}>
                  <div className={css.reviewerName}>Anna M.</div>
                  <div className={css.reviewerRating}>
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                  </div>
                </div>
              </div>
              <div className={css.reviewDate}>March 2025</div>
            </div>
            <p className={css.reviewText}>This is a sample review text.</p>
          </li>
          <li className={css.reviewsItem}>
            <div className={css.reviewer}>
              <div className={css.reviewerInfo}>
                <span className={css.reviewerLogo}>A.M.</span>
                <div className={css.reviewerMark}>
                  <div className={css.reviewerName}>Anna M.</div>
                  <div className={css.reviewerRating}>
                    {' '}
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                    <IconStar stroke={2} size={12} color="#FBBF24" />
                  </div>
                </div>
              </div>
              <div className={css.reviewDate}>March 2025</div>
            </div>
            <p className={css.reviewText}>This is a sample review text.</p>
          </li>
        </ul>
      </div>
      <div className={css.cardBooking}>
        <div className={css.sessionPrice}>
          <strong className={css.sessionPriceNumber}>90$</strong>
          <span className={css.sessionPriceText}>/session</span>
        </div>
        <div className={css.wrapperBtns}>
          <button className={css.readMoreBtn} type="button">
            <span className={css.readMoreBtnText}>Read more</span>
            <IconChevronDown stroke={2} size={24} aria-hidden="true" />
          </button>
          <button
            className={css.bookingBtn}
            type="button"
            onClick={handleBookingClick}
          >
            Book a session
          </button>
        </div>
      </div>
    </li>
  );
}
