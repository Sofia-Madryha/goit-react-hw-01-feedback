import "./Profile.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profileWrapper">
      <div className="profileInfo"><img className="profileImg" src={avatar} alt={username} width="640" />
      <h2>{username}</h2>
      <p className="profileTag">@{tag}</p>
      <p className="profileLocation">{location}</p>
      </div>
      <ul className="statsList">
        <li className="statsItem">Folowers {stats.followers}</li>
        <li className="statsItem">Views {stats.views}</li>
        <li className="statsItem">Likes {stats.likes}</li>
      </ul>
    </div>
  );
};
