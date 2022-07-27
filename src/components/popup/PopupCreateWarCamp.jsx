import React, {useEffect} from 'react';
import {TextField} from "@mui/material";
import '../../css/Popup.css';
import PopupButton from "./PopupButton";
import {useState} from "react";
import {useStateIfMounted} from "use-state-if-mounted";
import axios from "axios";
import {URL_createWarCamp, URL_getDataWarCampById, URL_updateWarCamp} from "../../api/Api";
import CircularProgress from "@mui/material/CircularProgress";

function PopupCreateWarCamp({active, setActive, id, setBaseId, setLoading, setUpdate}) {

    console.log(id)

    useEffect(() => {

        if (id !== "" && id !== undefined && id !== null) {
            fetchDataWarCampById(
                id,
                setNameWarCamp,
                setNumberWarCamp,
                setLocation,
                setLoadingDataBase
            )
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
        isLoading ?
            <div className="popup popup__loading__active">
                <div className="popup__loading__content">
                    <CircularProgress/>
                </div>
            </div>
            :
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
                                sx={{marginTop: "20px"}}
                                value={numberWarCamp}
                                onChange={handleNumberWarCamp}
                                label="Номер части"
                                variant="outlined"
                            />
                            <TextField
                                sx={{marginTop: "20px"}}
                                value={location}
                                onChange={handleLocation}
                                label="Место расположения"
                                variant="outlined"
                            />
                        </div>
                        <div className="popup__buttons">
                            <PopupButton text="Создать" action={() => {
                                if (nameWarCamp.length !== 0 && numberWarCamp.length !== 0 && location.length !== 0) {
                                    if (id !== undefined && id !== null && id !== '') {
                                        updateWarCamp(setLoading, id, nameWarCamp, numberWarCamp, location, setUpdate)
                                    } else {
                                        createWarCamp(setLoading, nameWarCamp, numberWarCamp, location, setUpdate)
                                    }
                                    cleanStates()
                                    setActive(false)
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

async function updateWarCamp(setLoading, id, nameWarCamp, numberWarCamp, location, setUpdate) {
    setUpdate(true)
    setLoading(true)
    const data = {
        id,
        nameWarCamp,
        numberWarCamp,
        location
    }
    await axios.post(URL_updateWarCamp, data)
    setLoading(false)
    setUpdate(false)
}

async function createWarCamp(setLoading, nameWarCamp, numberWarCamp, location, setUpdate) {
    setUpdate(true)
    setLoading(true)
    const data = {
        nameWarCamp,
        numberWarCamp,
        location
    }
    await axios.post(URL_createWarCamp, data)
    setLoading(false)
    setUpdate(false)
}

async function fetchDataWarCampById(id, setNameWarCamp, setNumberWarCamp, setLocation, setLoading) {
    setLoading(true)
    const response = await axios.post(URL_getDataWarCampById, { id })
    setNameWarCamp(response.data.nameWarCamp)
    setNumberWarCamp(response.data.numberWarCamp)
    setLocation(response.data.location)
    setLoading(false)
}