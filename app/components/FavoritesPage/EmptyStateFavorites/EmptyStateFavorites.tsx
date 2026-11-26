import css from './EmptyStateFavorites.module.css';
import Link from 'next/link';
import { IconHeart, IconArrowRight } from '@tabler/icons-react';
export default function EmptyStateFavorites() {
  return (
    <section className={`container ${css.emptyStateFavorites}`}>
      <div className={css.innerWrapper}>
        <div className={css.emptyStateContent}>
          <div className={css.heartIcon}>
            <IconHeart
              stroke={2}
              size={75}
              color="#707973"
              aria-hidden="true"
            />
          </div>
          <div className={css.emptyStateInfo}>
            <h2 className={css.emptyStateTitle}>
              You haven&#39;t saved any specialists yet
            </h2>
            <p className={css.emptyStateText}>
              Browse our catalog and tap the heart icon to add specialists to
              your favorites.
            </p>
          </div>
          <Link href="/psychologists" className={css.browseSpecialistsLink}>
            Browse specialists <IconArrowRight stroke={1} color="#fff" />
          </Link>
        </div>
      </div>
    </section>
  );
}
