import React, {useContext, useEffect, useState} from 'react';
import {OIContext} from "../context/context";
import dataObjectInformatizationJS from "../data/dataObjectInformatization";
import '../css/InfoOIPage.css'
import FilterRowInfo from "../components/infoWarCamp/FilterRow";
import {Button, ButtonGroup, Divider} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function InfoOiPage() {

    const [oi, setOi] = useState({})

    const {oiId} = useContext(OIContext)

    useEffect(() => {
        setOi(dataObjectInformatizationJS.find((oi) => oi.id === oiId))
    }, [])

    return (
        <div className="">
            <HeaderInfoOIBlock nameOI={oi.name}/>
            <CertOIBlock certNumber={oi.cert}/>
            <SIOIBlock siNumber={oi.si}/>
            <SCROIBlock scrNumber={oi.scr}/>
        </div>
    );
}

function HeaderInfoOIBlock({nameOI}) {

    return (
        <div className="header__card background__card">
            <LabelInBlock label={nameOI} isHeader={true}/>
            <Divider/>
            <FilterRowInfo nameRow="Дата обновления:" valueRow="2020-12-13" isOI={false} afterDivider={true}/>
            <FilterRowInfo nameRow="Название В/Ч:" valueRow="Военная часть №1" isOI={false}/>
            <FilterRowInfo nameRow="Номер В/Ч:" valueRow="75752" isOI={false}/>
        </div>
    );
}

function CertOIBlock({certNumber}) {

    return (
        <div className="header__card background__card">
            <div className="cert__body">
                <LabelInBlock label={"Аттестат № " + certNumber} isHeader={false}/>
                <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px", marginBottom: "10px"}} >
                    <Button sx={{ height : "30px"}}>
                        <EditIcon/>
                    </Button>
                    <Button sx={{ height : "30px"}} onClick={ () => {

                    }}>
                        <DeleteIcon/>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <Divider/>
                <FilterRowInfo nameRow="Орган сертификации:" valueRow="Кто-то" isOI={false} afterDivider={true}/>
                <FilterRowInfo nameRow="Категория:" valueRow="2" isOI={false}/>
                <FilterRowInfo nameRow="Дата аттестации:" valueRow="2020-12-13" isOI={false}/>
                <FilterRowInfo nameRow="Дата переаттестации:" valueRow="2025-12-13" isOI={false}/>
            </div>
        </div>
    );
}

function SIOIBlock({siNumber}) {

    return (
        <div className="header__card background__card">
            <div className="cert__body">
                <LabelInBlock label={"Акт специальной проверки"} isHeader={false}/>
                <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px", marginBottom: "10px"}} >
                    <Button sx={{ height : "30px"}}>
                        <EditIcon/>
                    </Button>
                    <Button sx={{ height : "30px"}} onClick={ () => {

                    }}>
                        <DeleteIcon/>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <Divider/>
                <FilterRowInfo nameRow="Номер документа:" valueRow={siNumber} isOI={false} afterDivider={true}/>
                <FilterRowInfo nameRow="Дата проверки:" valueRow="2020-12-13" isOI={false}/>
            </div>
        </div>
    );
}

function SCROIBlock({scrNumber}) {

    return (
        <div className="header__card background__card">
            <div className="cert__body">
                <LabelInBlock label={"Заключение специальной проверки"} isHeader={false}/>
                <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px", marginBottom: "10px"}} >
                    <Button sx={{ height : "30px"}}>
                        <EditIcon/>
                    </Button>
                    <Button sx={{ height : "30px"}} onClick={ () => {

                    }}>
                        <DeleteIcon/>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <Divider/>
                <FilterRowInfo nameRow="Номер документа:" valueRow={scrNumber} isOI={false} afterDivider={true}/>
                <FilterRowInfo nameRow="Дата проверки:" valueRow="2020-12-13" isOI={false}/>
            </div>
        </div>
    );
}


function LabelInBlock({label, isHeader}) {
    return (
        <div className={isHeader ? "header__label font__header" : "header__label font__body"}>
            <p>{label}</p>
        </div>
    );
}


export default InfoOiPage;