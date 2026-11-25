import css from './FilterBar.module.css';
import FilterDropdown from './FilterDropdown/FilterDropdown';
import specializations from '../../../data/specializations.json';
import approaches from '../../../data/approaches.json';
export type PriceFilterOption = 'All' | 'Under $50' | 'Under $100';

export default function FilterBar() {
  const prices: PriceFilterOption[] = ['All', 'Under $50', 'Under $100'];
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
          <FilterDropdown
            filterName="Specialization"
            options={specializations}
          />
        </li>
        <li className={css.filterItem}>
          <FilterDropdown
            filterName="Therapeutic Approach"
            options={approaches}
          />
        </li>
        <li className={css.filterItem}>
          <FilterDropdown filterName="Price per Session" options={prices} />
        </li>
      </ul>
      <button type="button" className={css.clearFilterBtn}>
        Clear Filters
      </button>
    </section>
  );
}
