import React from 'react';
import PopupButton from "./PopupButton";
import '../../css/Popup.css'
import '../../css/InfoPage.css'
import axios from "axios";
import {URL_removeCert} from "../../api/Api";

function PopupRemoveCert({active, setActive, number, id, setLoading}) {
    return (
        <div
            className={active ? "popup active" : "popup"}
        >
            <div className="popup__remove" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Удалить часть</p>
                    <div className="background popup__cont__message">
                        <p className="popup__message">Вы точно хотите удалить аттестат №{number}?</p>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Удалить" color="#B42B46FF" action={() => removeCert(setLoading, id)}/>
                        <PopupButton text="Отменить" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function removeCert(setLoading, id) {
    setLoading(true)
    await axios.post(URL_removeCert, { id })
    setLoading(false)
}

export default PopupRemoveCert;