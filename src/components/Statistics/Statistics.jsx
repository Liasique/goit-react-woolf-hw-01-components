import { getRandomHexColor } from './getRandomHexColor';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return ( // Added return statement here
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.stat_item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Statistics };
