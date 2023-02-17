import PropTypes from 'prop-types';
import css from './StatList.module.css';

const bgColorGen = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

export const StatList = ({ items }) => {
  return items.map(({ id, label, percentage }) => {
    const bgColor = bgColorGen();
    return (
      <li
        style={{ backgroundColor: '#' + bgColor }}
        className={css.item}
        key={id}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
      </li>
    );
  });
};

StatList.defaultProps = {
  items: [],
};

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
