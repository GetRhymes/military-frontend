import React from 'react';
import LabelInBlock from "../LabelInBlock";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function SiEmptyBlock({setActive}) {
    return (
        <div className="empty__block__main background__card" onClick={()=> setActive(true)}>
            <LabelInBlock label="Акт специальной проверки" isHeader={false}/>
            <div className="empty__block empty__label">
                <AddCircleIcon fontSize="large"/>
            </div>
        </div>
    );
}

export default SiEmptyBlock;