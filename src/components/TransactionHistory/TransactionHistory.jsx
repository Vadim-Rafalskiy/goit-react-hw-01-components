import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, ...props }) => {
    return <TransactionItem key={id} {...props} />;
  });
  return (
    <table className={css.transactioHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
