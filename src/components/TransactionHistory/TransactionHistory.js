import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';
function TransactionHistory({ items }) {
  return (
    <table className={s['transaction-history']}>
      <thead className={s['table-head']}>
        <tr>
          <th className={s['table-row__head']}>Type</th>
          <th className={s['table-row__head']}>Amount</th>
          <th className={s['table-row__head']}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
