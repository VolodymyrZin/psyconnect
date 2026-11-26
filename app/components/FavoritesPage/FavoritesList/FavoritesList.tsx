import PsychologistCard from '../../PsychologistsPage/PsychologistsList/PsychologistCard/PsychologistCard';
import css from './FavoritesList.module.css';
export default function FavoritesList() {
  return (
    <ul className={`container ${css.favoritesList}`}>
      <PsychologistCard />
      <PsychologistCard />
      <PsychologistCard />
      <PsychologistCard />
    </ul>
  );
}
