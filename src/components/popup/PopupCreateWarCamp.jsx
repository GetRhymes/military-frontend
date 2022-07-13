import React from 'react';
import {Button, TextField} from "@mui/material";
import '../../css/Popup.css';
import PopupButton from "./PopupButton";

function PopupCreateWarCamp({active, setActive}) {
    return (
        <div
            className={active ? "popup active" : "popup"}
            // onClick={() => {setActive(false)}}
        >
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Добавить часть</p>
                    <div className="popup__data__fields">
                        <TextField
                            label="Название части"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            label="Номер части"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            label="Место расположения"
                            variant="outlined"
                        />
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Создать"/>
                        <PopupButton text="Закрыть" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupCreateWarCamp;