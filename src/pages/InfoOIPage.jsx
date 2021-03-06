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
import PopupUpdateS from "../components/popup/PopupUpdateS";
import CertEmptyBlock from "../components/infoOI/empty-block/CertEmptyBlock";
import SiEmptyBlock from "../components/infoOI/empty-block/SIEmptyBlock";
import SCREmptyBlock from "../components/infoOI/empty-block/SCREmptyBlock";
import PopupCreateComponent from "../components/popup/PopupCreateComponent";
import PopupCreateDocument from "../components/popup/PopupCreateDocument";
import PopupRemoveCert from "../components/popup/PopupRemoveCert";
import PopupRemoveSI from "../components/popup/PopupRemoveSI";
import PopupRemoveComponent from "../components/popup/PopupRemoveComponent";
import PopupRemoveDocument from "../components/popup/PopupRemoveDocument";
import PopupRemoveSCR from "../components/popup/PopupRemoveSCR";
import axios from "axios";
import {URL_getDataComponentById, URL_getDataDocumentById, URL_getDataOIById} from "../api/Api";

function InfoOiPage({oiId}) {

    const [oi, setOi] = useStateIfMounted(null)

    const [idDoc, setIdDoc] = useStateIfMounted("")

    const [idComp, setIdComp] = useStateIfMounted("")

    const [activeHeaderPopup, setActiveHeaderPopup] = useState(false)

    const [activeComponent, setActiveComponent] = useState(false)

    const [activeDocument, setActiveDocument] = useState(false)

    const [activeCert, setActiveCert] = useState(false)

    const [activeS, setActiveS] = useState(false)

    const [isSI, setIsSI] = useState(false)

    const [nameOI, setNameOI] = useState("")

    const [loading, setLoading] = useState(false)

    const [removeCert, setRemoveCert] = useState(false)

    const [removeSI, setRemoveSI] = useState(false)

    const [removeSCR, setRemoveSCR] = useState(false)

    const [removeComponent, setRemoveComponent] = useState(false)

    const [removeDocument, setRemoveDocument] = useState(false)

    const [certNumber, setCertNumber] = useState("")

    const [siNumber, setSiNumber] = useState("")

    const [scrNumber, setSCRNumber] = useState("")

    const [componentName, setComponentName] = useState("")

    const [componentSeries, setComponentSeries] = useState("")

    const [documentName, setDocumentName] = useState("")

    const [documentNumReg, setDocumentNumReg] = useState("")

    const [loadingDataDocument, setLoadingDataDocument] = useState(false)

    const [loadingDataComponent, setLoadingDataComponent] = useState(false)

    const [dataDocument, setDataDocument] = useState([])

    const [dataComponent, setDataComponent] = useState([])

    const [update, setUpdate] = useState(false)

    useEffect(() => {
        if (oiId === null) {
            oiId = localStorage.getItem('oiid')
        }
        fetchDataOI(setLoading, oiId, setOi)
        fetchDataDocument(setLoadingDataDocument, oiId, setDataDocument)
        fetchDataComponent(setLoadingDataComponent, oiId, setDataComponent)
    }, [update])

    let isLoading = loading || loadingDataDocument || loadingDataComponent || oi === null



    return (
        isLoading ?
            <LoadingScreen/>
            :
            <div className="main__container__oi__info">
                <HeaderInfoOIBlock nameOI={oi.name} setActiveHeaderPopup={setActiveHeaderPopup} setNameOI={setNameOI} warCampName={oi.warCampName} warCampNumber={oi.warCampNumber} update={oi.update}/>
                {
                    oi.cert.numberCert !== null ?
                        <CertOIBlock
                            cert={oi.cert}
                            setActive={setActiveCert}
                            setActiveRemove={setRemoveCert}
                            setCertNumber={setCertNumber}
                        />
                        :
                        <CertEmptyBlock setActive={setActiveCert}/>
                }
                {
                    oi.si.numberDoc !== null ?
                        <SIOIBlock
                            si={oi.si}
                            setActive={setActiveS}
                            setIsSI={setIsSI}
                            setRemoveSi={setRemoveSI}
                            setSiNumber={setSiNumber}
                        />
                        :
                        <SiEmptyBlock setActive={setActiveS} setIsSI={setIsSI}/>
                }
                {
                    oi.scr.numberDoc !== null ?
                        <SCROIBlock
                            scr={oi.scr}
                            setActive={setActiveS}
                            setIsSI={setIsSI}
                            setRemoveSCR={setRemoveSCR}
                            setSCRNumber={setSCRNumber}
                        />
                        :
                        <SCREmptyBlock setActive={setActiveS} setIsSI={setIsSI}/>
                }

                <ComponentsIoBlock
                    setActive={setActiveComponent}
                    setRemoveComponent={setRemoveComponent}
                    setComponentName={setComponentName}
                    setComponentSeries={setComponentSeries}
                    dataComponent={dataComponent}
                    setIdComp={setIdComp}
                />
                <DocumentsIoBlock
                    setActive={setActiveDocument}
                    setRemoveDocument={setRemoveDocument}
                    setDocumentName={setDocumentName}
                    setDocumentNumReg={setDocumentNumReg}
                    dataDocument={dataDocument}
                    setIdDoc={setIdDoc}
                />
                <PopupCreateObjectInformatization
                    active={activeHeaderPopup}
                    setActive={setActiveHeaderPopup}
                    oldName={nameOI}
                    setLoading={setLoading}
                    id={oi.id}
                    setUpdate={setUpdate}
                />
                <PopupUpdateCert active={activeCert} setActive={setActiveCert} id={oi.id} setLoading={setLoading} setUpdate={setUpdate}/>
                <PopupUpdateS active={activeS} setActive={setActiveS} isSI={isSI} setLoading={setLoading} id={oi.id} setUpdate={setUpdate}/>
                <PopupCreateComponent active={activeComponent} setActive={setActiveComponent} setLoading={setLoading} id={oi.id} setUpdate={setUpdate}/>
                <PopupCreateDocument active={activeDocument} setActive={setActiveDocument} setLoading={setLoading} id={oi.id} setUpdate={setUpdate}/>
                <PopupRemoveCert active={removeCert} setActive={setRemoveCert} number={certNumber} id={oi.id} setLoading={setLoading} setUpdate={setUpdate}/>
                <PopupRemoveSI active={removeSI} setActive={setRemoveSI} number={siNumber} setLoading={setLoading} id={oi.id} setUpdate={setUpdate}/>
                <PopupRemoveSCR active={removeSCR} setActive={setRemoveSCR} number={scrNumber} setLoading={setLoading} id={oi.id} setUpdate={setUpdate}/>
                <PopupRemoveComponent active={removeComponent} setActive={setRemoveComponent} name={componentName} series={componentSeries} setLoading={setLoading} id={idComp} setUpdate={setUpdate}/>
                <PopupRemoveDocument active={removeDocument} setActive={setRemoveDocument} name={documentName} numReg={documentNumReg} setLoading={setLoading} id={idDoc} setUpdate={setUpdate}/>
            </div>
    );
}

async function fetchDataOI(setLoading, oiId, setOi) {
    setLoading(true)
    const data = { id : oiId }
    const response = await axios.post(URL_getDataOIById, data)
    setOi(response.data)
    setLoading(false)
}

async function fetchDataComponent(setLoading, oiId, setDataComponent) {
    setLoading(true)
    const data = { id : oiId }
    const response = await axios.post(URL_getDataComponentById, data)
    setDataComponent(response.data)
    setLoading(false)
}

async function fetchDataDocument(setLoading, oiId, setDataDocument) {
    setLoading(true)
    const data = { id : oiId }
    const response = await axios.post(URL_getDataDocumentById, data)
    setDataDocument(response.data)
    // await setDataDocument(dataDocumentsJS)
    setLoading(false)
}

export default InfoOiPage;