import css from './FilterDropdown.module.css';
import { IconChevronDown } from '@tabler/icons-react';
export interface FilterDropdownProps {
  filterName: string;
}
export default function FilterDropdown({ filterName }: FilterDropdownProps) {
  return (
    <div className={css.filterDropdown}>
      <button type="button" className={css.filterName}>
        {filterName}
        <IconChevronDown stroke={2} size={24} aria-hidden="true" />
      </button>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
