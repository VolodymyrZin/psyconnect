import css from './FavoritesPageTitle.module.css';
export default function FavoritesPageTitle() {
  return (
    <section className={`container ${css.favoritesTitleSection}`}>
      <h1 className={css.favoritesTitle}>Your Favorites</h1>
      <p className={css.favoritestText}>
        Specialists you&#39;ve saved for quick access.
      </p>
    </section>
  );
}
