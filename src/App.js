import './App.css';
import Sidebar from "./components/bars/Sidebar";
import NavigationRoutes from "./navigation/NavigationRoutes";

function App() {
  return (
      <div className="cont">
        <Sidebar/>
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
