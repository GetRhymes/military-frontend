import {Box, Button, ButtonGroup, Divider} from "@mui/material";
import FilterRowInfo from "../infoWarCamp/FilterRow";
import React from "react";
import LabelInBlock from "./LabelInBlock";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function HeaderInfoOIBlock({nameOI, setActiveHeaderPopup, setNameOI}) {

    return (
        <div className="header__card background__card">
            <Box sx={{ display: "flex", flexDirection: "horizontal", justifyContent: "space-between"}}>
                <LabelInBlock label={nameOI} isHeader={true}/>
                <ButtonGroup sx={{boxShadow: "unset", borderRadius: "12px", marginBottom: "10px"}} >
                    <Button sx={{ height : "30px"}} onClick={() => {
                        setNameOI(nameOI)
                        setActiveHeaderPopup(true)
                    }}>
                        <EditIcon/>
                    </Button>
                </ButtonGroup>
            </Box>
            <Divider/>
            <FilterRowInfo nameRow="Дата обновления:" valueRow="2020-12-13" isOI={false} afterDivider={true}/>
            <FilterRowInfo nameRow="Название В/Ч:" valueRow="Военная часть №1" isOI={false}/>
            <FilterRowInfo nameRow="Номер В/Ч:" valueRow="75752" isOI={false}/>
        </div>
    );
}

export default HeaderInfoOIBlock;