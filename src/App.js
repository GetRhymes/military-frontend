import './css/App.css';
import Topbar from "./components/Topbar";
import NavigationRoutes from "./navigation/NavigationRoutes";
import {useEffect, useState} from "react";

function App() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])


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
