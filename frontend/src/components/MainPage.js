import "../styles/MainPage.scss";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <main>
      <div className="container-mainpage">
        <Cards />
        <Sidebar />
      </div>
    </main>
  );
}

export default MainPage;
