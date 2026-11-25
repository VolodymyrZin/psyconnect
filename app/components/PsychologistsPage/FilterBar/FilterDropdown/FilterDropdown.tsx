import css from './FilterDropdown.module.css';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';
export interface FilterDropdownProps {
  filterName: string;
  options: string[];
}
export default function FilterDropdown({
  filterName,
  options,
}: FilterDropdownProps) {
  return (
    <div className={css.filterDropdown}>
      <button type="button" className={css.filterName}>
        {filterName}
        <IconChevronDown stroke={2} size={24} aria-hidden="true" />
      </button>
      <ul className={`${css.optionsList} ${css.open}`}>
        {options.map((option, index) => (
          <li
            key={option}
            className={`${css.optionsItem} ${index === 1 ? css.selected : ''}`}
          >
            {option}
            <IconCheck
              color="#0D6C4A"
              stroke={3}
              className={css.tickIcon}
              size={10}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
