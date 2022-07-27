import {Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, IconButton} from "@mui/material";
import FilterRowInfo from "./FilterRow";
import React, {useContext} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TopicIcon from '@mui/icons-material/Topic';
import {useNavigate} from "react-router-dom";
import {BaseContext} from "../../context/context";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import axios from "axios";
import {URL_downloadBase} from "../../api/Api";
import FileSaver from 'file-saver'

function WarCampAccordion(
    {
        baseId,
        nameWarCamp,
        numberWarCamp,
        locationWarCamp,
        setActive,
        setName,
        setActiveCreate,
        setBaseId,
        setActiveScreen,
        setRemoveId
    }
) {
    return (
        <Accordion
            inputprops={{position: "initial"}}
            sx={{marginBottom: "10px"}}
            disableGutters={true}
        >
            <WarCampAccordionSummary nameWarCamp={nameWarCamp} baseId={baseId}/>
            <WarCampAccordionDetails
                id={baseId}
                nameWarCamp={nameWarCamp}
                numberWarCamp={numberWarCamp}
                locationWarCamp={locationWarCamp}
                setActive={setActive}
                setName={setName}
                setActiveCreate={setActiveCreate}
                setBaseId={setBaseId}
                setActiveScreen={setActiveScreen}
                setRemoveId={setRemoveId}
            />
        </Accordion>
    );
}

function WarCampAccordionSummary({nameWarCamp, baseId}) {

    const {setBaseId} = useContext(BaseContext)

    let navigate = useNavigate();

    function redirect() {
        navigate("/oi");
    }

    return (
        <AccordionSummary>
            <div className="header__accordion__container">
                <div className="header__accordion__block">
                    <p className="header__accordion__label">{nameWarCamp}</p>
                    <div className="header__accordion__button">
                        <IconButton
                            onClick={e => {
                                e.stopPropagation()
                                setBaseId(baseId)
                                redirect()
                            }}
                        >
                            <TopicIcon fontSize="large"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </AccordionSummary>
    );
}

function WarCampAccordionDetails(
    {
        nameWarCamp,
        locationWarCamp,
        numberWarCamp,
        setActive,
        setName,
        setActiveCreate,
        id,
        setBaseId,
        setActiveScreen,
        setRemoveId
    }
) {
    return (
        <AccordionDetails>
            <div className="background body__accordion__container">
                <div className="body__accordion__info">
                    <FilterRowInfo nameRow="Номер части:" valueRow={numberWarCamp} isOI={false}/>
                    <FilterRowInfo nameRow="Место расположения:" valueRow={locationWarCamp} isOI={false}/>
                </div>
                <div className="body__accordion__button">
                    <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px"}}>
                        <Button onClick={() => {
                            setBaseId(id)
                            setActiveCreate(true)
                        }}>
                            <EditIcon/>
                        </Button>
                        <Button onClick={() => downloadBase(setActiveScreen, id)}>
                            <SystemUpdateAltIcon fontSize="medium"/>
                        </Button>
                        <Button onClick={() => {
                            setRemoveId(id)
                            setName(nameWarCamp)
                            setBaseId(id)
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

async function downloadBase(setActive, id) {
    setActive(true)
    const file = await axios.post(URL_downloadBase, {id}, {responseType: 'arraybuffer'})
    const fileName = file.headers['content-disposition'].split('filename=')[1];
    const blob = new Blob(
        [file.data],
        {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
    )
    FileSaver.saveAs(blob, fileName)
    setActive(false)
}

export default WarCampAccordion;