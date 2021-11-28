import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={s['table-row']}>
      <td className={s['table-data']}>{type}</td>
      <td className={s['table-data']}>{amount}</td>
      <td className={s['table-data']}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistoryItem;
