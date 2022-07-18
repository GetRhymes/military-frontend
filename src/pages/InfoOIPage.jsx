import React, {useEffect, useState} from 'react';
import dataObjectInformatizationJS from "../data/dataObjectInformatization";
import '../css/InfoOIPage.css'
import CertOIBlock from "../components/infoOI/CertOIBlock";
import SIOIBlock from "../components/infoOI/SIOIBlock";
import SCROIBlock from "../components/infoOI/SCROIBlock";
import HeaderInfoOIBlock from "../components/infoOI/HeaderInfoOIBlock";
import ComponentsIoBlock from "../components/infoOI/ComponentsIOBlock";
import DocumentsIoBlock from "../components/infoOI/DocumentsIoBlock";
import PopupCreateObjectInformatization from "../components/popup/PopupCreateObjectInformatization";
import {useStateIfMounted} from "use-state-if-mounted";
import LoadingScreen from "../components/LoadingScreen";
import PopupUpdateCert from "../components/popup/PopupUpdateCert";

function InfoOiPage({oiId}) {

    const [oi, setOi] = useStateIfMounted({})

    const [activeHeaderPopup, setActiveHeaderPopup] = useState(false)

    const [activeCert, setActiveCert] = useState(false)

    const [nameOI, setNameOI] = useState("")

    const [loading, setLoading] = useState(false)

    async function fetchDataOI() {
        setLoading(true)
        await setOi(dataObjectInformatizationJS.find((oi) => oi.id === oiId))
        setLoading(false)
    }

    useEffect(() => {
        if (oiId === null) oiId = localStorage.getItem('oiid')
        fetchDataOI()
    }, [])

    return (
        loading ?
            <LoadingScreen/>
            :
            <div className="main__container__oi__info">
                <HeaderInfoOIBlock nameOI={oi.name} setActiveHeaderPopup={setActiveHeaderPopup} setNameOI={setNameOI}/>
                <CertOIBlock certNumber={oi.cert} setActive={setActiveCert}/>
                <SIOIBlock siNumber={oi.si}/>
                <SCROIBlock scrNumber={oi.scr}/>
                <ComponentsIoBlock/>
                <DocumentsIoBlock/>
                <PopupCreateObjectInformatization
                    active={activeHeaderPopup}
                    setActive={setActiveHeaderPopup}
                    oldName={nameOI}
                    isUpdate={true}
                />
                <PopupUpdateCert active={activeCert} setActive={setActiveCert}/>
            </div>
    );
}

export default InfoOiPage;