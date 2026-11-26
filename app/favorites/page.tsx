import EmptyStateFavorites from '../components/FavoritesPage/EmptyStateFavorites/EmptyStateFavorites';
import FavoritesList from '../components/FavoritesPage/FavoritesList/FavoritesList';
import FavoritesPageTitle from '../components/FavoritesPage/FavoritesPageTitle/FavoritesPageTitle';

export default function FavoritesPage() {
  return (
    <main>
      {/* <FavoritesPageTitle />
      <FavoritesList /> */}
      <EmptyStateFavorites />
    </main>
  );
}
