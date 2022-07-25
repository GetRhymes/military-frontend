import {Routes, Route, Navigate} from "react-router-dom";
import ObjectInformatizationPage from "../pages/ObjectInformatizationPage";
import BasePage from "../pages/BasePage";
import React, {useState} from 'react';
import {BaseContext} from "../context/context";
import InfoOiPage from "../pages/InfoOIPage";


function NavigationRoutes() {

    const [baseId, setBaseId] = useState("")

    const [oiId, setOiId] = useState(null)

    console.log(oiId)

    return (
        <BaseContext.Provider value={{
            baseId,
            setBaseId
        }}>
            <Routes>
                <Route path="/bases" element={<BasePage/>}/>
                <Route path="/oi" element={<ObjectInformatizationPage setOiId={setOiId} id={baseId}/>}/>
                <Route path="/info-oi" element={<InfoOiPage oiId={oiId}/>}/>
                <Route path="*" element={<Navigate to="/bases"/>}/>
            </Routes>
        </BaseContext.Provider>
    );
}

export default NavigationRoutes;