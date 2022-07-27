import React from 'react';
import {TextField} from "@mui/material";
import PopupButton from "./PopupButton";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {useStateIfMounted} from "use-state-if-mounted";
import axios from "axios";
import {URL_createDocument} from "../../api/Api";

function PopupCreateDocument({active, setActive, setLoading, id, setUpdate}) {

    const [nameDocument, setNameDocument] = useStateIfMounted("")

    const [regNum, setRegNum] = useStateIfMounted("")

    const [date, setDate] = useStateIfMounted("")

    function handleNameComponent(event) {
        setNameDocument(event.target.value)
    }

    function handleRegNum(event) {
        setRegNum(event.target.value)
    }

    function handleDate(newValue) {
        setDate(newValue)
    }

    function cleanStates() {
        setNameDocument("")
        setRegNum("")
        setDate(null)
    }

    return (
        <div className={active ? "popup active" : "popup"}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Добавить документ</p>
                    <div className="popup__data__fields">
                        <TextField
                            value={nameDocument}
                            onChange={handleNameComponent}
                            label="Название"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            value={regNum}
                            onChange={handleRegNum}
                            label="Номер регистрации"
                            variant="outlined"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Дата согласования"
                                inputFormat="dd.MM.yyyy"
                                value={date}
                                onChange={handleDate}
                                renderInput={(params) => <TextField sx={{marginTop: "20px"}} {...params} color="primary" />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Создать" action={() => {
                            if (nameDocument !== "" && regNum !== "" && date !== "") {
                                createDocument(setLoading, nameDocument, regNum, date, id, setUpdate)
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

async function createDocument(setLoading, nameDocument, regNum, date, id, setUpdate) {
    setLoading(true)
    setUpdate(true)
    const data = {
        id,
        nameDocument,
        regNum,
        date
    }
    await axios.post(URL_createDocument, data)
    setLoading(false)
    setUpdate(false)
}

export default PopupCreateDocument;