import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatList } from '../StatList/StatList';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        <StatList items={stats} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
