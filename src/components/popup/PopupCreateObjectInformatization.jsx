import React, {useState} from 'react';
import {TextField} from "@mui/material";
import PopupButton from "./PopupButton";

function PopupCreateObjectInformatization({active, setActive, oldName, isUpdate}) {

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
                                console.log({nameOI})
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

export default PopupCreateObjectInformatization;