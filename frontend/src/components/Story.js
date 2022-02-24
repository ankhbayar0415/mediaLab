import "../styles/Story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 8) {
    accountName = accountName.substring(0, 8) + "...";
  }
  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;
