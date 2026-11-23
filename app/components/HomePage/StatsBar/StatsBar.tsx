import css from './StatsBar.module.css';
export default function StatsBar() {
  return (
    <section className={css.statsBar}>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <strong className={css.statsItemNumber}>120+</strong>
          <p className={css.statsItemText}>VERIFIED SPECIALISTS</p>
        </li>
        <li className={css.statsItem}>
          <strong className={css.statsItemNumber}>5,000+</strong>
          <p className={css.statsItemText}>HAPPY CLIENTS</p>
        </li>
        <li className={css.statsItem}>
          <strong className={css.statsItemNumber}>10+</strong>
          <p className={css.statsItemText}>YEARS OF EXPERIENCE</p>
        </li>
      </ul>
    </section>
  );
}
