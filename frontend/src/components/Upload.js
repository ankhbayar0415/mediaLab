import "../styles/Upload.scss";
import Navigation from "./Navigation";
import { ReactComponent as BackButton } from "../images/backButton.svg";
import image from "../images/temp.jpg";

function Upload() {
  const userName = "ankhbayar_E";
  return (
    <main>
      <Navigation />
      <div className="container-upload">
        <div className="upload-box">
          <div className="upload-header">
            <div className="upload-header-content">
              <BackButton className="backButton" />
              Create New Post
              <a>Share</a>
            </div>
          </div>
          <div className="upload-content">
            <div className="upload-pic">
              <input type="file" className="upload-icon" />
            </div>
            <div className="upload-desc">
              <div className="upload-desc-header">
                <img src={image} alt="propic" className="propic" />
                {userName}
              </div>
              <textarea
                placeholder="Write a Caption"
                name="w3review"
                rows="8"
                cols="50"
                className="upload-desc-desc"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Upload;
