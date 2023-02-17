import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, ...props }) => {
    return <FriendListItem key={id} {...props} />;
  });
  return <ul className={css.friendList}>{elements}</ul>;
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
