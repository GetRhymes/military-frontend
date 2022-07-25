import {Button, ButtonGroup, Divider} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterRowInfo from "../infoWarCamp/FilterRow";
import React from "react";
import LabelInBlock from "./LabelInBlock";

function SCROIBlock({scrNumber, setActive, setIsSI, setSCRNumber, setRemoveSCR}) {

    return (
        <div className="header__card background__card">
            <div className="cert__body">
                <LabelInBlock label={"Заключение специальной проверки"} isHeader={false}/>
                <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px", marginBottom: "10px"}} >
                    <Button sx={{ height : "30px"}} onClick={()=> {
                        setIsSI(false)
                        setActive(true)
                    }}>
                        <EditIcon/>
                    </Button>
                    <Button sx={{ height : "30px"}} onClick={ () => {
                        setSCRNumber(scrNumber)
                        setRemoveSCR(true)
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

export default SCROIBlock;