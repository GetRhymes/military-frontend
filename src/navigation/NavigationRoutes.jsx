import { Routes, Route, Navigate} from "react-router-dom";
import ObjectInformatizationPage from "../pages/ObjectInformatizationPage";
import BasePage from "../pages/BasePage";
import React, {useState} from 'react';
import {BaseContext, OIContext} from "../context/context";
import InfoOiPage from "../pages/InfoOIPage";


function NavigationRoutes() {

    const [baseId, setBaseId] = useState("")

    const [oiId, setOiId] = useState("")

    return (
        <OIContext.Provider value={{
            oiId,
            setOiId
        }}>
            <BaseContext.Provider value={{
                baseId,
                setBaseId
            }}>
                <Routes>
                    <Route path="/bases" element={<BasePage/>}/>
                    <Route path="/oi" element={<ObjectInformatizationPage/>}/>
                    <Route path="/info-oi" element={<InfoOiPage/>}/>
                    <Route path="*" element={<Navigate to="/bases"/>}/>
                </Routes>
            </BaseContext.Provider>
        </OIContext.Provider>
    );
}

export default NavigationRoutes;