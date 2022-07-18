import React, {useContext} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, Divider, IconButton} from "@mui/material";
import FilterRowInfo from "../infoWarCamp/FilterRow";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {useNavigate} from "react-router-dom";

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
        setOiId
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
        setName
    }
) {
    return (
        <AccordionDetails>
            <div className="background body__accordion__container">
                <div className="body__accordion__info">
                    <FilterRowInfo nameRow="Дата последнего изменения:" valueRow={dateUpdate} isOI={true}/>
                    <FilterRowInfo nameRow="Количество документов:" valueRow={numberOfDocuments} isOI={true}/>
                    <Divider/>
                    <FilterRowInfo nameRow="Аттестат:" valueRow={cert !== null ? cert : "Пусто"} afterDivider={true} isOI={true}/>
                    <FilterRowInfo nameRow="Акт специального исследования:" valueRow={si !== null ? si : "Пусто"} isOI={true}/>
                    <FilterRowInfo nameRow="Заключение специальной проверки:" valueRow={scr !== null ? scr : "Пусто"} isOI={true}/>
                </div>
                <div className="body__accordion__button__oi">
                    <ButtonGroup orientation="horizontal" sx={{boxShadow: "unset", borderRadius: "12px"}}>
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

export default ObjectInformatizationAccordion;