import css from './FilterBar.module.css';
import FilterDropdown from './FilterDropdown/FilterDropdown';
export default function FilterBar() {
  return (
    <section className={css.filterBar}>
      <div className={css.wrapperSvg}>
        <svg width={18} height={18}>
          <use href="/sprite.svg#icon-filters" />
        </svg>
        <span className={css.text}>Filters</span>
      </div>
      <ul className={css.filterList}>
        <li className={css.filterItem}>
          <FilterDropdown filterName="Specialization" />
        </li>
        <li className={css.filterItem}>
          <FilterDropdown filterName="Therapeutic Approach" />
        </li>
        <li className={css.filterItem}>
          <FilterDropdown filterName="Price per Session" />
        </li>
      </ul>
      <button type="button" className={css.clearFilterBtn}>
        Clear Filters
      </button>
    </section>
  );
}
