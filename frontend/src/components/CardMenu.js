import "../styles/CardMenu.scss";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="cardMenuIcon" />
        <Comments className="cardMenuIcon" />
        <Inbox className="cardMenuIcon" />
      </div>
      <Bookmark className="cardMenuIcon" />
    </div>
  );
}

export default CardMenu;
