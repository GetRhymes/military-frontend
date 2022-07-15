import React from 'react';
import {Box} from "@mui/material";
import PopupRemove from "../popup/PopupRemove";
import BodyObjectInformatizationBlock from "./BodyObjectInformatizationBlock";
import {useState} from "react";
import HeaderBlock from "../HeaderBlock";
import PopupCreateObjectInformatization from "../popup/PopupCreateObjectInformatization";

function ListObjectInformatization({dataObjectsInformatization}) {

    const [active, setActive] = useState(false)

    const [activeRemove, setActiveRemove] = useState(false)

    const [name, setName] = useState("")

    return (
        <Box height="calc(100% - 10px)" overflow="auto" sx={{marginTop: "10px"}}>
            <HeaderBlock setActive={setActive} label="Введите название ОИ"/>
            <BodyObjectInformatizationBlock
                dataObjectsInformatization={dataObjectsInformatization}
                setActive={setActiveRemove}
                setName={setName}
            />
            <PopupCreateObjectInformatization active={active} setActive={setActive}/>
            <PopupRemove active={activeRemove} setActive={setActiveRemove} name={name}/>
        </Box>
    );
}

export default ListObjectInformatization;