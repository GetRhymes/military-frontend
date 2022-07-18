import React, {useEffect} from 'react';
import {TextField} from "@mui/material";
import '../../css/Popup.css';
import PopupButton from "./PopupButton";
import {useState} from "react";
import dataWarCampJS from "../../data/dataWarCamp";
import {useStateIfMounted} from "use-state-if-mounted";

function PopupCreateWarCamp({active, setActive, id, setBaseId}) {

    useEffect(()=> {
        console.log(id)
        if (id !== "") {
            const base = dataWarCampJS.find((b) => b.id === id)
            setNameWarCamp(base.name)
            setNumberWarCamp(base.number)
            setLocation(base.location)
        }
    }, [id])

    const [nameWarCamp, setNameWarCamp] = useStateIfMounted("")

    const [numberWarCamp, setNumberWarCamp] = useStateIfMounted("")

    const [location, setLocation] = useStateIfMounted("")

    const [loadingDataBase, setLoadingDataBase] = useState(false)

    const [loadingUpdate, setLoadingUpdate] = useState(false)

    function handleNameWarCamp(event) {
        const name = event.target.value
        setNameWarCamp(name)
    }

    function handleNumberWarCamp(event) {
        const number = event.target.value
        setNumberWarCamp(number)
    }

    function handleLocation(event) {
        const location = event.target.value
        setLocation(location)
    }

    function cleanStates() {
        setBaseId("")
        setNameWarCamp("")
        setNumberWarCamp("")
        setLocation("")
    }

    let isLoading = loadingDataBase || loadingUpdate

    return (
        <div className={active ? "popup active" : "popup"}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Добавить часть</p>
                    <div className="popup__data__fields">
                        <TextField
                            value={nameWarCamp}
                            onChange={handleNameWarCamp}
                            label="Название части"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            value={numberWarCamp}
                            onChange={handleNumberWarCamp}
                            label="Номер части"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            value={location}
                            onChange={handleLocation}
                            label="Место расположения"
                            variant="outlined"
                        />
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Создать" action={() => {
                            if (nameWarCamp.length !== 0 && numberWarCamp.length !== 0 && location.length !== 0) {
                                console.log({nameWarCamp, numberWarCamp, location})
                                cleanStates()
                            }
                        }}/>
                        <PopupButton text="Закрыть" action={() => {
                            cleanStates()
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupCreateWarCamp;