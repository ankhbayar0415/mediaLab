import "../styles/ProfileFeed.scss";
import { ReactComponent as PostsGrid } from "../images/PostsGrid.svg";
import { ReactComponent as Videos } from "../images/videos.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
import { ReactComponent as Tagged } from "../images/tagged.svg";

function ProfileFeed() {
  return (
    <div className="profileFeedContainer">
      <div className="pFeedHeader">
        <div className="options">
          <PostsGrid className="headerIcon" />
          <span className="iconName">POSTS</span>
        </div>
        <div className="options">
          <Videos className="headerIcon" />
          <span className="iconName">VIDEOS</span>
        </div>
        <div className="options">
          <Bookmark className="headerIcon" />
          <span className="iconName">SAVED</span>
        </div>
        <div className="options">
          <Tagged className="headerIcon" />
          <span className="iconName">TAGGED</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProfileFeed;
