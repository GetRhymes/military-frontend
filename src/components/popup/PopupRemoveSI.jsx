import PopupButton from "./PopupButton";
import React from "react";
import axios from "axios";
import {URL_removeSI} from "../../api/Api";

function PopupRemoveSI({active, setActive, number, id, setLoading}) {
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
                        <PopupButton text="Удалить" color="#B42B46FF" action={() => removeSI(setLoading, id)}/>
                        <PopupButton text="Отменить" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function removeSI(setLoading, id) {
    setLoading(true)
    await axios.post(URL_removeSI, { id })
    setLoading(false)
}

export default PopupRemoveSI;