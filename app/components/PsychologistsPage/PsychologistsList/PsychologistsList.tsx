import PsychologistCard from './PsychologistCard/PsychologistCard';
import SkeletonCard from './SkeletonCard/SkeletonCard';
import css from './PsychologistsList.module.css';
import EmptyState from './EmptyState/EmptyState';

export default function PsychologistsList() {
  return (
    <>
      <ul className={css.psychologistsList}>
        <PsychologistCard />
        <PsychologistCard />
        <PsychologistCard />
        <PsychologistCard />
        {/* <PsychologistCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard /> */}
      </ul>
      {/* <EmptyState /> */}
      <button type="button" className={css.loadMoreBtn}>
        Load more psychologists
      </button>
    </>
  );
}
