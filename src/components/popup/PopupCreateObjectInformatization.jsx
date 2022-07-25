import React, {useState} from 'react';
import {TextField} from "@mui/material";
import PopupButton from "./PopupButton";
import axios from "axios";
import {URL_createOI, URL_updateOI} from "../../api/Api";
import CircularProgress from "@mui/material/CircularProgress";

function PopupCreateObjectInformatization({active, setActive, oldName, setLoading, id, idMB}) {

    const [nameOI, setNameOI] = useState(oldName !== undefined ? oldName : "")

    function handleNameOI(event) {
        const name = event.target.value
        setNameOI(name)
    }

    return (
            <div className={active ? "popup active" : "popup"}>
                <div className="popup__oi__content" onClick={e => e.stopPropagation()}>
                    <div>
                        <p className="popup__label">Добавить ОИ</p>
                        <div className="popup__data__fields">
                            <TextField
                                value={nameOI}
                                onChange={handleNameOI}
                                label="Название ОИ"
                                variant="outlined"
                            />
                        </div>
                        <div className="popup__buttons">
                            <PopupButton text="Создать" action={() => {
                                if (nameOI.length !== 0) {
                                    if (id !== undefined && id !== null && id !== '') {
                                        updateOI(setLoading, nameOI, id)
                                    } else {
                                        createOI(setLoading, nameOI, idMB)
                                    }
                                    setActive(false)
                                }
                            }}/>
                            <PopupButton text="Закрыть" action={() => {
                                setActive(false)
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

async function createOI(setLoading, nameOI, id) {
    setLoading(true)
    await axios.post(URL_createOI, { id, nameOI })
    setLoading(false)
}

async function updateOI(setLoading, nameOI, id) {
    setLoading(true)
    const data = {id, nameOI}
    await axios.post(URL_updateOI, data)
    setLoading(false)
}

export default PopupCreateObjectInformatization;