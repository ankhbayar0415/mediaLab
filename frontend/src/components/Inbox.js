import "../styles/Inbox.scss";
import Navigation from "./Navigation";

function Inbox() {
  return (
    <main>
      <Navigation />
      <div className="container-messenger">
        <div className="messageMenu">
          <div className="convo-list">{/* <Conversation /> */}</div>
          <div className="chat"></div>
        </div>
      </div>
    </main>
  );
}

export default Inbox;
