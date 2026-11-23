'use client';
import FilterBar from '../components/PsychologistsPage/FilterBar/FilterBar';
import PsychologistsList from '../components/PsychologistsPage/PsychologistsList/PsychologistsList';
import PsychologistsPageTitle from '../components/PsychologistsPage/PsychologistsPageTitle/PsychologistsPageTitle';
import css from './page.module.css';
export default function PsychologistsPage() {
  return (
    <main className={`container ${css.psychologistsPageContainer}`}>
      <PsychologistsPageTitle />
      <FilterBar />
      <PsychologistsList />
    </main>
  );
}
