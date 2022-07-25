import PopupButton from "./PopupButton";
import React from "react";
import axios from "axios";
import {URL_removeComponent} from "../../api/Api";

function PopupRemoveComponent({active, setActive, name, series, id, setLoading}) {
    return (
        <div
            className={active ? "popup active" : "popup"}
        >
            <div className="popup__remove" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Удалить часть</p>
                    <div className="background popup__cont__message">
                        <p className="popup__message">Вы точно хотите удалить {name} ({series})?</p>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Удалить" color="#B42B46FF" action={() => removeComponent(setLoading, id)}/>
                        <PopupButton text="Отменить" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function removeComponent(setLoading, id) {
    setLoading(true)
    await axios.post(URL_removeComponent, id)
    setLoading(false)
}

export default PopupRemoveComponent;