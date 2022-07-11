import { Routes, Route, Navigate} from "react-router-dom";
import InfoPage from "../pages/InfoPage";
import AddPage from "../pages/AddPage";


function NavigationRoutes() {

    return (
        <Routes>
            <Route path="/info" element={<InfoPage/>}/>
            <Route path="/create" element={<AddPage/>}/>
            <Route path="*" element={<Navigate to="/info"/>}/>
        </Routes>
    );
}

export default NavigationRoutes;