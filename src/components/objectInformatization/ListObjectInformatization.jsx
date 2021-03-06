import React from 'react';
import {Box} from "@mui/material";
import PopupRemove from "../popup/PopupRemove";
import BodyObjectInformatizationBlock from "./BodyObjectInformatizationBlock";
import {useState} from "react";
import HeaderBlock from "../HeaderBlock";
import PopupCreateObjectInformatization from "../popup/PopupCreateObjectInformatization";
import {useStateIfMounted} from "use-state-if-mounted";
import PopupLoading from "../popup/PopupLoading";

function ListObjectInformatization(
    {
        dataObjectsInformatization,
        setOiId,
        setLoading,
        idMB,
        setUpdate
    }
) {

    const [active, setActive] = useState(false)

    const [activeRemove, setActiveRemove] = useState(false)

    const [activeScreen, setActiveScreen] = useState(false)

    const [name, setName] = useState("")

    const [searchValue, setSearchValue] = useStateIfMounted(null)

    const [removeId, setRemoveId] = useStateIfMounted(null)

    function handleSearchValue(event) {
        const value = event.target.value
        setSearchValue(value)
    }

    return (
        <Box height="calc(100% - 10px)" overflow="auto" sx={{marginTop: "10px"}}>
            <HeaderBlock setActive={setActive} label="Введите название ОИ" handleSearchValue={handleSearchValue} isBasePage={false}/>
            <BodyObjectInformatizationBlock
                dataObjectsInformatization={dataObjectsInformatization}
                setActive={setActiveRemove}
                setName={setName}
                searchValue={searchValue}
                setOiId={setOiId}
                setActiveScreen={setActiveScreen}
                setRemoveId={setRemoveId}
            />
            <PopupCreateObjectInformatization
                active={active}
                setActive={setActive}
                setLoading={setLoading}
                idMB={idMB}
                setUpdate={setUpdate}
            />
            <PopupRemove
                active={activeRemove}
                setActive={setActiveRemove}
                name={name}
                setLoading={setLoading}
                isOI={true}
                setUpdate={setUpdate}
                removeId={removeId}/>
            <PopupLoading active={activeScreen}/>
        </Box>
    );
}

export default ListObjectInformatization;