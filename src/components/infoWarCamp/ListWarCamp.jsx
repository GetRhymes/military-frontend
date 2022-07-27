import React, {useState} from 'react';
import '../../css/InfoPage.css';
import BodyWarCampBlock from "./BodyWarCampBlock";
import {Box} from "@mui/material";
import PopupCreateWarCamp from "../popup/PopupCreateWarCamp";
import PopupRemove from "../popup/PopupRemove";
import HeaderBlock from "../HeaderBlock";
import {useStateIfMounted} from "use-state-if-mounted";
import PopupLoading from "../popup/PopupLoading";

function ListWarCamp(
    {
        dataWarCamp,
        setLoading,
        setBaseId,
        setUpdateWarCamp
    }
) {

    const [active, setActive] = useState(false)

    const [activeRemove, setActiveRemove] = useState(false)

    const [name, setName] = useState("")

    const [baseIdAny, setBaseIdAny] = useState("")

    const [activeScreen, setActiveScreen] = useState(false)

    const [searchValue, setSearchValue] = useStateIfMounted(null)

    const [removeId, setRemoveId] = useStateIfMounted(null)

    function handleSearchValue(event) {
        const value = event.target.value
        setSearchValue(value)
    }

    return (
        <Box height="calc(100% - 10px)" overflow="auto" sx={{marginTop: "10px"}}>
            <HeaderBlock setActive={setActive} label="Введите название части" handleSearchValue={handleSearchValue} isBasePage={true}/>
            <BodyWarCampBlock
                dataWarCamp={dataWarCamp}
                setActive={setActiveRemove}
                setName={setName}
                setActiveCreate={setActive}
                setBaseId={setBaseIdAny}
                searchValue={searchValue}
                setActiveScreen={setActiveScreen}
                setRemoveId={setRemoveId}
            />
            <PopupCreateWarCamp
                active={active}
                setActive={setActive}
                id={baseIdAny}
                setBaseId={setBaseIdAny}
                setLoading={setLoading}
                setUpdate={setUpdateWarCamp}
            />
            <PopupRemove
                active={activeRemove}
                setActive={setActiveRemove}
                name={name}
                setLoading={setLoading}
                isOI={false}
                setUpdate={setUpdateWarCamp}
                removeId={removeId}
            />
            <PopupLoading active={activeScreen}/>
        </Box>
    );
}

export default ListWarCamp;


