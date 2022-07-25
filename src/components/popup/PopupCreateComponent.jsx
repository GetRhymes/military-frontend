import React from 'react';
import {useStateIfMounted} from "use-state-if-mounted";
import {TextField} from "@mui/material";
import PopupButton from "./PopupButton";
import axios from "axios";
import {URL_createComponent} from "../../api/Api";

function PopupCreateComponent({active, setActive, setLoading, id}) {

    const [nameDocument, setNameDocument] = useStateIfMounted("")

    const [series, setSeries] = useStateIfMounted("")


    function handleNameDocument(event) {
        setNameDocument(event.target.value)
    }

    function handleSeries(event) {
        setSeries(event.target.value)
    }

    function cleanStates() {
        setNameDocument("")
        setSeries("")
    }

    return (
        <div className={active ? "popup active" : "popup"}>
            <div className="popup__si__content" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Добавить компонент</p>
                    <div className="popup__data__fields">
                        <TextField
                            value={nameDocument}
                            onChange={handleNameDocument}
                            label="Название"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            value={series}
                            onChange={handleSeries}
                            label="Номер регистрации"
                            variant="outlined"
                        />
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Создать" action={() => {
                            if (nameDocument !== "" && series !== "") {
                                createComponent(setLoading, nameDocument, series, id)
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

async function createComponent(setLoading, nameDocument, series, id) {
    setLoading(true)
    const data = {
        id,
        nameDocument,
        series
    }
    await axios.post(URL_createComponent, data)
    setLoading(false)
}

export default PopupCreateComponent;