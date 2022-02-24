import "../styles/UserProfile.scss";
import Profile from "./Profile";
import ProfileFeed from "./ProfileFeed";
import image from "../images/temp.jpg";
import { ReactComponent as Settings } from "../images/settings.svg";

function UserProfile() {
  return (
    <main>
      <div className="container-userprofile">
        <div className="profileHeader">
          <div className="pPic">
            <Profile
              iconSize="huge"
              image={image}
              storyBorder={true}
              hideAccountName={true}
            />
          </div>

          <div className="userInfo">
            <div className="infoHeader">
              <div className="userName">ankhbayar_e</div>
              <button> Edit Profile </button>
              <Settings className="icon" />
            </div>
            <div className="insight">
              <div className="likes">
                <strong>15</strong> likes
              </div>
              <a className="followers">
                <strong>15</strong> followers
              </a>
              <a className="following">
                <strong>15</strong> following
              </a>
            </div>
            <div className="nameBio">
              <div className="fullName">Ankhbayar Enkhlkhagva</div>
              <div className="bio">
                "Everything is GREAT when you dont give a SHIT"
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileFeed />
    </main>
  );
}

export default UserProfile;