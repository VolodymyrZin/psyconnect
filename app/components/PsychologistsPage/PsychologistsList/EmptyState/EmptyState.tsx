import css from './EmptyState.module.css';
import { IconTargetArrow } from '@tabler/icons-react';
export default function EmptyState() {
  return (
    <section className={css.emptyState}>
      <div className={css.outerCircle}>
        <div className={css.innerCircle}>
          <div className={css.point}>
            <IconTargetArrow stroke={2} />
          </div>
        </div>
      </div>
      <h2 className={css.emptyStateTitle}>
        It’s quiet here at{' '}
        <span className={css.emptyStateTitleLight}>the moment.</span>
      </h2>
      <p className={css.emptyStateText}>
        Try adjusting your filters to find the right specialist for you.
      </p>
      <button type="button" className={css.clearFiltersBtn}>
        Clear filters
      </button>
    </section>
  );
}
