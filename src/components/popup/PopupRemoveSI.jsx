import PopupButton from "./PopupButton";
import React from "react";
import axios from "axios";
import {URL_removeSI} from "../../api/Api";

function PopupRemoveSI({active, setActive, number, id, setLoading, setUpdate}) {
    return (
        <div
            className={active ? "popup active" : "popup"}
        >
            <div className="popup__remove" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Удалить часть</p>
                    <div className="background popup__cont__message">
                        <p className="popup__message">Вы точно хотите удалить акт специальной проверки №{number}?</p>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Удалить" color="#B42B46FF" action={() => {
                            removeSI(setLoading, id, setUpdate)
                            setActive(false)
                        }}/>
                        <PopupButton text="Отменить" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function removeSI(setLoading, id, setUpdate) {
    setLoading(true)
    setUpdate(true)
    await axios.post(URL_removeSI, { id })
    setLoading(false)
    setUpdate(false)
}

export default PopupRemoveSI;