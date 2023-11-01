import '../FriendList/FriendList.css';

export const FriendListItem = ({ friendItem }) => {
  return (
    <div className="friendItem">
      {friendItem.isOnline ? (
        <span className="status online">{friendItem.isOnline}</span>
      ) : (
        <span className=" status offline">{friendItem.isOnline}</span>
      )}
      
      <img
        className="friendImg"
        src={friendItem.avatar}
        alt={friendItem.name}
        width="640"
      />
      <h3 className="friendName">{friendItem.name}</h3>
    </div>
  );
};
