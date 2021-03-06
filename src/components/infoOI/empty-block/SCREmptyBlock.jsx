import React from 'react';
import LabelInBlock from "../LabelInBlock";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function ScrEmptyBlock({setActive, setIsSI}) {
    return (
        <div className="empty__block__main background__card" onClick={()=> {
            setActive(true)
            setIsSI(false)
        }}>
            <LabelInBlock label="Заключение специальной проверки" isHeader={false}/>
            <div className="empty__block empty__label">
                <AddCircleIcon fontSize="large"/>
            </div>
        </div>
    );
}

export default ScrEmptyBlock;