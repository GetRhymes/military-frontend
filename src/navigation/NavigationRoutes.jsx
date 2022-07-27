import {Routes, Route, Navigate} from "react-router-dom";
import ObjectInformatizationPage from "../pages/ObjectInformatizationPage";
import BasePage from "../pages/BasePage";
import React, {useEffect, useState} from 'react';
import {BaseContext} from "../context/context";
import InfoOiPage from "../pages/InfoOIPage";


function NavigationRoutes() {

    const [baseId, setBaseId] = useState("")

    const [oiId, setOiId] = useState(null)

    useEffect(() => {
        if (baseId !== "") localStorage.setItem('idMB', baseId)
        if (baseId === "") setBaseId(localStorage.getItem('idMB'))
    }, [baseId])

    return (
        <BaseContext.Provider value={{
            baseId,
            setBaseId
        }}>
            <Routes>
                <Route path="/bases" element={<BasePage setBaseId={setBaseId}/>}/>
                <Route path="/oi" element={<ObjectInformatizationPage setOiId={setOiId} id={baseId}/>}/>
                <Route path="/info-oi" element={<InfoOiPage oiId={oiId}/>}/>
                <Route path="*" element={<Navigate to="/bases"/>}/>
            </Routes>
        </BaseContext.Provider>
    );
}

export default NavigationRoutes;