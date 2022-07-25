import React from 'react';
import PopupButton from "./PopupButton";
import '../../css/Popup.css'
import '../../css/InfoPage.css'
import axios from "axios";
import {URL_deleteOI, URL_deleteWarCampById} from "../../api/Api";

function PopupRemove({active, setActive, name, setLoading, id, isOI}) {
    return (
        <div
            className={active ? "popup active" : "popup"}
        >
            <div className="popup__remove" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Удалить часть</p>
                    <div className="background popup__cont__message">
                       <p className="popup__message">Вы точно хотите удалить: "{name}"?</p>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Удалить" color="#B42B46FF" action={() => deleteWarCampById(setLoading, id, isOI)}/>
                        <PopupButton text="Отменить" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function deleteWarCampById(setLoading, id, isOI) {
    setLoading(true)
    await axios.post(isOI ? URL_deleteOI : URL_deleteWarCampById, { id })
    setLoading(false)
}

export default PopupRemove;