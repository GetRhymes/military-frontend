import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import PopupButton from "./PopupButton";
import {useStateIfMounted} from "use-state-if-mounted";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
import {URL_createCert} from "../../api/Api";

function PopupUpdateCert({active, setActive, id, setLoading}) {

    const [numberCert, setNumberCert] = useStateIfMounted("")

    const [owner, setOwner] = useStateIfMounted("")

    const [category, setCategory] = useStateIfMounted("")

    const [dateCreateCert, setDateCreateCert] = useStateIfMounted("")

    const [dateFinishCert, setDateFinishCert] = useStateIfMounted("")

    function handleNumberCert(event) {
        const number = event.target.value
        setNumberCert(number)
    }

    function handleOwner(event) {
        const owner = event.target.value
        setOwner(owner)
    }

    function handleCategory(event) {
        setCategory(event.target.value)
    }

    function handleDateCreateCert(newValue) {
        setDateCreateCert(newValue)
    }
    function handleDateFinishCert(newValue) {
        setDateFinishCert(newValue)
    }

    function clearStates() {
        setNumberCert("")
        setOwner("")
        setCategory("")
        setDateCreateCert("")
        setDateFinishCert("")
    }

    return (

        <div className={active ? "popup active" : "popup"}>
            <div className="popup__cert" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Добавить аттестат</p>
                    <div className="popup__data__fields">
                        <TextField
                            value={numberCert}
                            onChange={handleNumberCert}
                            label="Номер аттестата"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            value={owner}
                            onChange={handleOwner}
                            label="Орган сертификации"
                            variant="outlined"
                        />
                        <FormControl  sx={{ marginTop: "20px"}}>
                            <InputLabel>Категория</InputLabel>
                            <Select
                                value={category}
                                label="Выберите институт"
                                onChange={handleCategory}
                            >
                                <MenuItem value="Секретно">Секретно</MenuItem>
                                <MenuItem value="Совершенно секретно">Совершенно секретно</MenuItem>
                                <MenuItem value="Особой важности">Особой важности</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker

                                    label="Дата сертификации"
                                    inputFormat="dd.MM.yyyy"
                                    value={dateCreateCert}
                                    onChange={handleDateCreateCert}
                                    renderInput={(params) => <TextField sx={{marginRight: "10px"}} {...params} color="primary" />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Дата переаттестации"
                                    inputFormat="dd.MM.yyyy"
                                    value={dateFinishCert}
                                    onChange={handleDateFinishCert}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Создать" action={() => {
                            if (id !== undefined && id !== null && id !== '') {
                                createCert(setLoading, numberCert, owner, category, dateCreateCert, dateFinishCert, id)
                            }
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

async function createCert(setLoading, numberCert, owner, category, dateCreateCert, dateFinishCert, id) {
    setLoading(true)
    const date = {
        id,
        numberCert,
        owner,
        category,
        dateCreateCert,
        dateFinishCert
    }
    await axios.post(URL_createCert, date)
    setLoading(false)
}

export default PopupUpdateCert;