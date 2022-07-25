import React from 'react';
import '../../css/Popup.css'
import CircularProgress from '@mui/material/CircularProgress';

function PopupLoading({active}) {

    return (
        <div className={active ? "popup popup__loading__active" : "popup"}>
            <div className="popup__loading__content">
                <CircularProgress/>
            </div>
        </div>
    );
}


export default PopupLoading;