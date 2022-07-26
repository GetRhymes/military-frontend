import React, {useContext} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, Divider, IconButton} from "@mui/material";
import FilterRowInfo from "../infoWarCamp/FilterRow";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {useNavigate} from "react-router-dom";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import axios from "axios";
import {URL_downloadObj} from "../../api/Api";
import FileSaver from 'file-saver'

function ObjectInformatizationAccordion(
    {
        id,
        nameObjectInformatization,
        dateUpdate,
        numberOfDocuments,
        cert,
        si,
        scr,
        setActive,
        setName,
        setOiId,
        setActiveScreen
    }
) {
    return (
        <Accordion
            inputprops={{position: "initial"}}
            sx={{marginBottom: "10px"}}
            disableGutters={true}
        >
            <ObjectInformatizationAccordionSummary id={id} nameObjectInformatization={nameObjectInformatization} setOiId={setOiId}/>
            <ObjectInformatizationAccordionDetails
                nameObjectInformatization={nameObjectInformatization}
                dateUpdate={dateUpdate}
                numberOfDocuments={numberOfDocuments}
                cert={cert}
                si={si}
                scr={scr}
                setActive={setActive}
                setName={setName}
                setActiveScreen={setActiveScreen}
                id={id}
            />
        </Accordion>
    );
}

function ObjectInformatizationAccordionSummary({id, nameObjectInformatization, setOiId}) {

    let navigate = useNavigate();

    function redirect() {
        navigate("/info-oi");
    }

    return (
        <AccordionSummary>
            <div className="header__accordion__container">
                <div className="header__accordion__block">
                    <p className="header__accordion__label">{nameObjectInformatization}</p>
                    <div className="header__accordion__button">
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation()
                                setOiId(id)
                                localStorage.setItem('oiid', id)
                                redirect()
                            }}
                        >
                            <RemoveRedEyeIcon fontSize="large"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </AccordionSummary>
    );
}

function ObjectInformatizationAccordionDetails(
    {
        nameObjectInformatization,
        dateUpdate,
        numberOfDocuments,
        cert,
        si,
        scr,
        setActive,
        setName,
        id,
        setActiveScreen
    }
) {
    return (
        <AccordionDetails>
            <div className="background body__accordion__container">
                <div className="body__accordion__info">
                    <FilterRowInfo nameRow="Дата последнего изменения:" valueRow={dateUpdate} isOI={true}/>
                    <FilterRowInfo nameRow="Количество документов:" valueRow={numberOfDocuments} isOI={true}/>
                    <Divider/>
                    <FilterRowInfo nameRow="Аттестат:" valueRow={cert !== null ? cert.numberCert : "Пусто"} afterDivider={true} isOI={true}/>
                    <FilterRowInfo nameRow="Акт специального исследования:" valueRow={si !== null ? si.numberDoc : "Пусто"} isOI={true}/>
                    <FilterRowInfo nameRow="Заключение специальной проверки:" valueRow={scr !== null ? scr.numberDoc : "Пусто"} isOI={true}/>
                </div>
                <div className="body__accordion__button__oi">
                    <ButtonGroup orientation="horizontal" sx={{boxShadow: "unset", borderRadius: "12px"}}>
                        <Button onClick={() => downloadObj(setActiveScreen, id)}>
                            <SystemUpdateAltIcon fontSize="medium" />
                        </Button>
                        <Button onClick={() => {
                            setName(nameObjectInformatization)
                            setActive(true)
                        }}>
                            <DeleteIcon/>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </AccordionDetails>
    );
}

async function downloadObj(setActive, id) {
    setActive(true)
    const file = await axios.post(URL_downloadObj, {id}, {responseType: 'arraybuffer'})
    const fileName = file.headers['content-disposition'].split('filename=')[1];
    const blob = new Blob(
        [file.data],
        {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
    )
    FileSaver.saveAs(blob, fileName)
    setActive(false)
}

export default ObjectInformatizationAccordion;