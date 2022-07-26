import {Button, ButtonGroup, Divider} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterRowInfo from "../infoWarCamp/FilterRow";
import React from "react";
import LabelInBlock from "./LabelInBlock";

function SIOIBlock({si, setActive, setIsSI, setSiNumber, setRemoveSi}) {

    return (
        <div className="header__card background__card">
            <div className="cert__body">
                <LabelInBlock label={"Акт специальной проверки"} isHeader={false}/>
                <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px", marginBottom: "10px"}} >
                    <Button sx={{ height : "30px"}} onClick={() => {
                        setIsSI(true)
                        setActive(true)
                    }}>
                        <EditIcon/>
                    </Button>
                    <Button sx={{ height : "30px"}} onClick={ () => {
                        setSiNumber(si.numberDoc)
                        setRemoveSi(true)
                    }}>
                        <DeleteIcon/>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <Divider/>
                <FilterRowInfo nameRow="Номер документа:" valueRow={si.numberDoc} isOI={false} afterDivider={true}/>
                <FilterRowInfo nameRow="Дата проверки:" valueRow={si.dateCheck} isOI={false}/>
            </div>
        </div>
    );
}

export default SIOIBlock;