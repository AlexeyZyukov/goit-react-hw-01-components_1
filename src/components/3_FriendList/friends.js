import PropTypes from 'prop-types';
import friendsStyle from './friendsStyle.module.css';

export default function Friends({ isOnline, avatar, name }) {
  console.log(name);
  console.log(isOnline);

  return (
    <li className={friendsStyle.friendsItem}>
      <span
        className={
          { isOnline } ? friendsStyle.statusOnline : friendsStyle.statusOffline
        }
      ></span>
      <img
        className={friendsStyle.friendsAvatar}
        src={avatar}
        alt="User avatar"
        width="150"
      />
      <p className="name">{name}</p>
    </li>
  );
}

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
