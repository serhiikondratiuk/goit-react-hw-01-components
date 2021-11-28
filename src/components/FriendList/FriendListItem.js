import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.status && s['status--online']}>{isOnline}</span>
      ) : (
        <span className={s.status && s['status--offline']}>{isOnline}</span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
