import "../styles/profileCard.scss";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Comments } from "../images/comments.svg";

function ProfileCard(props) {
  const { image, commentsNumber, likedByNumber } = props;
  return (
    <>
      <div className="profileCard">
        <img className="profileCard-img" src={image} alt="card content" />
        <div className="profileCard-info">
          <Notifications /> &nbsp;
          {likedByNumber} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Comments /> &nbsp;
          {commentsNumber}
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
