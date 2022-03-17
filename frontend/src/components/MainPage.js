import "../styles/MainPage.scss";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <main>
      <Navigation />
      <div className="container-mainpage">
        <Cards />
        <Sidebar />
      </div>
    </main>
  );
}

export default MainPage;
