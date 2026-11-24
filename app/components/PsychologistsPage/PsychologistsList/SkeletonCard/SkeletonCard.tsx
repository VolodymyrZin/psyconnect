import css from './SkeletonCard.module.css';
import { IconHeartFilled } from '@tabler/icons-react';
export default function SkeletonCard() {
  return (
    <li className={css.cardItem}>
      <div className={css.cardOverview}>
        <div className={css.wrapperImage}>
          <div className={css.image} />
        </div>
        <div className={css.cardDetails}>
          <h3 className={css.name}></h3>
          <div className={css.cardInfoList}></div>
          <ul className={css.specializationsList}>
            <li className={css.specializationsItem}></li>
            <li className={css.specializationsItem}></li>
            <li className={css.specializationsItem}></li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        className={css.favourites}
        aria-label="Add to favorites"
      >
        <IconHeartFilled aria-hidden="true" color="#ebeeed" />
      </button>
      <p className={css.description}></p>
      <ul className={css.conditionList}>
        <li className={css.conditionItem}></li>
        <li className={css.conditionItem}></li>
        <li className={css.conditionItem}></li>
      </ul>

      <div className={css.cardBooking}>
        <div className={css.sessionPrice}></div>
        <div className={css.wrapperBtns}>
          <div className={css.readMoreBtn}></div>
          <div className={css.bookingBtn}></div>
        </div>
      </div>
    </li>
  );
}
