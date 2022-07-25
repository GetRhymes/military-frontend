import PopupButton from "./PopupButton";
import React from "react";
import axios from "axios";
import {URL_removeComponent, URL_removeDocument} from "../../api/Api";

function PopupRemoveDocument({active, setActive, name, numReg, id, setLoading}) {
    return (
        <div
            className={active ? "popup active" : "popup"}
        >
            <div className="popup__remove" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Удалить часть</p>
                    <div className="background popup__cont__message">
                        <p className="popup__message">Вы точно хотите удалить документ: {name} ({numReg})?</p>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Удалить" color="#B42B46FF" action={() => removeDocument(setLoading, id)}/>
                        <PopupButton text="Отменить" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function removeDocument(setLoading, id) {
    setLoading(true)
    await axios.post(URL_removeDocument, id)
    setLoading(false)
}

export default PopupRemoveDocument;