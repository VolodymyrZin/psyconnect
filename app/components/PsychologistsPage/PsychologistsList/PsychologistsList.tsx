import PsychologistCard from './PsychologistCard/PsychologistCard';
import SkeletonCard from './SkeletonCard/SkeletonCard';
import css from './PsychologistsList.module.css';
import EmptyState from './EmptyState/EmptyState';
import { PsychologistModalData } from '@/app/types/psychologist';

export default function PsychologistsList() {
  const testPsychologists: PsychologistModalData[] = [
    { id: '1', name: 'Andy', avatar_url: '/images/heroImage.avif' },
    { id: '2', name: 'Anna', avatar_url: '/images/heroImage.avif' },
  ];
  return (
    <>
      <ul className={css.psychologistsList}>
        {testPsychologists.map(psychologist => (
          <PsychologistCard
            key={psychologist.id}
            id={psychologist.id}
            name={psychologist.name}
            avatar_url={psychologist.avatar_url}
          />
        ))}

        {/* <PsychologistCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard /> */}
      </ul>
      {/* <EmptyState /> */}
      <button type="button" className={css.loadMoreBtn}>
        Load more psychologists
      </button>
      <p className={css.endMessage}>You&#39;ve seen all specialists.</p>
    </>
  );
}
