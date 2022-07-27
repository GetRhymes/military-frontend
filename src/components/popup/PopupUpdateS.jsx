import React from 'react';
import {useStateIfMounted} from "use-state-if-mounted";
import {TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import PopupButton from "./PopupButton";
import axios from "axios";
import {URL_createSCR, URL_createSI} from "../../api/Api";

function PopupUpdateS({active, setActive, isSI, setLoading, id, setUpdate}) {
    const [numberDoc, setNumberDoc] = useStateIfMounted("")

    const [dateCheck, setDateCheck] = useStateIfMounted("")

    function handleNumberDoc(event) {
        const number = event.target.value
        setNumberDoc(number)
    }

    function handleDateCheck(newValue) {
        setDateCheck(newValue)
    }

    function clearStates() {
        setNumberDoc("")
        handleDateCheck(null)
    }

    return (
        <div className={active ? "popup active" : "popup"}>
            <div className="popup__si__content" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Добавить акт</p>
                    <div className="popup__data__fields">
                        <TextField
                            value={numberDoc}
                            onChange={handleNumberDoc}
                            label="Номер акта"
                            variant="outlined"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                value={dateCheck}
                                label="Дата согласования"
                                inputFormat="dd.MM.yyyy"
                                onChange={handleDateCheck}
                                renderInput={(params) => <TextField sx={{marginTop: "20px"}} {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Создать" action={() => {
                            createS(isSI, numberDoc, dateCheck, setLoading, id, setUpdate)
                            setActive(false)
                        }}/>
                        <PopupButton text="Закрыть" action={() => {
                            clearStates()
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function createS(isSI, numberDoc, dateCheck, setLoading, id, setUpdate) {
    setLoading(true)
    setUpdate(true)
    const data = {
        id,
        numberDoc,
        dateCheck
    }
    await axios.post(isSI ? URL_createSI : URL_createSCR, data)
    setLoading(false)
    setUpdate(false)
}

export default PopupUpdateS;