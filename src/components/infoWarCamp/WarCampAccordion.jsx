import {Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, IconButton} from "@mui/material";
import FilterRowInfo from "./FilterRow";
import React, {useContext} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TopicIcon from '@mui/icons-material/Topic';
import {useNavigate} from "react-router-dom";
import {BaseContext} from "../../context/context";

function WarCampAccordion({baseId, nameWarCamp, numberWarCamp, locationWarCamp, setActive, setName}) {
    return (
        <Accordion
            inputprops={{position: "initial"}}
            sx={{marginBottom: "10px"}}
            disableGutters={true}
        >
            <WarCampAccordionSummary nameWarCamp={nameWarCamp} baseId={baseId}/>
            <WarCampAccordionDetails
                nameWarCamp={nameWarCamp}
                numberWarCamp={numberWarCamp}
                locationWarCamp={locationWarCamp}
                setActive={setActive}
                setName={setName}
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

function WarCampAccordionDetails({nameWarCamp, locationWarCamp, numberWarCamp, setActive, setName}) {

    return (
        <AccordionDetails>
            <div className="background body__accordion__container">
                <div className="body__accordion__info">
                    <FilterRowInfo nameRow="Номер части:" valueRow={numberWarCamp} isOI={false}/>
                    <FilterRowInfo nameRow="Место расположения:" valueRow={locationWarCamp} isOI={false}/>
                </div>
                <div className="body__accordion__button">
                    <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px"}} >
                        <Button>
                            <EditIcon/>
                        </Button>
                        <Button onClick={ () => {
                            setName(nameWarCamp)
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

export default WarCampAccordion;