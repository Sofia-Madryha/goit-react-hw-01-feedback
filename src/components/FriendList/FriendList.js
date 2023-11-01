import { FriendListItem } from "components/FriendListItem/FriendListItem";
import "./FriendList.css"

export const FriendList = ({ friends }) => {
  return (
    <ul className="friendsWrapper">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friendItem={friend} />
        </li>
      ))}
    </ul>
  );
};
