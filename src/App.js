import './css/App.css';
import Topbar from "./components/Topbar";
import NavigationRoutes from "./navigation/NavigationRoutes";

function App() {
  return (
      <div className="cont">
        <Topbar/>
        <div className="active__screen">
          <div className="plug"/>
          <div className="dashboard">
            <NavigationRoutes/>
          </div>
        </div>
      </div>
  );
}

export default App;
