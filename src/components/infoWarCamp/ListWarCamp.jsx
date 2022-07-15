import React, {useState} from 'react';
import '../../css/InfoPage.css';
import BodyWarCampBlock from "./BodyWarCampBlock";
import {Box} from "@mui/material";
import PopupCreateWarCamp from "../popup/PopupCreateWarCamp";
import PopupRemove from "../popup/PopupRemove";
import HeaderBlock from "../HeaderBlock";

function ListWarCamp({dataWarCamp}) {

    const [active, setActive] = useState(false)

    const [activeRemove, setActiveRemove] = useState(false)

    const [name, setName] = useState("")

    return (
        <Box height="calc(100% - 10px)" overflow="auto" sx={{marginTop: "10px"}}>
            <HeaderBlock setActive={setActive} label="Введите название части"/>
            <BodyWarCampBlock dataWarCamp={dataWarCamp} setActive={setActiveRemove} setName={setName}/>
            <PopupCreateWarCamp active={active} setActive={setActive}/>
            <PopupRemove active={activeRemove} setActive={setActiveRemove} name={name}/>
        </Box>
    );
}

export default ListWarCamp;


