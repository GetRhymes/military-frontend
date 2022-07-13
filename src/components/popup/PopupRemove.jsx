import React from 'react';
import PopupButton from "./PopupButton";
import '../../css/Popup.css'
import '../../css/InfoPage.css'

function PopupRemove({active, setActive, name}) {
    return (
        <div
            className={active ? "popup active" : "popup"}
            // onClick={() => {setActive(false)}}
        >
            <div className="popup__remove" onClick={e => e.stopPropagation()}>
                <div>
                    <p className="popup__label">Удалить часть</p>
                    <div className="background popup__cont__message">
                       <p className="popup__message">Вы точно хотите удалить: "{name}"?</p>
                    </div>
                    <div className="popup__buttons">
                        <PopupButton text="Удалить" color="#B42B46FF"/>
                        <PopupButton text="Отменить" action={() => {
                            setActive(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupRemove;