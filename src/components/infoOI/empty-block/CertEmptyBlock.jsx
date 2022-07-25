import React from 'react';
import '../../../css/InfoOIPage.css'
import LabelInBlock from "../LabelInBlock";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CertEmptyBlock({setActive}) {
    return (
        <div className="empty__block__main background__card" onClick={()=> setActive(true)}>
            <LabelInBlock label="Аттестат" isHeader={false}/>
            <div className="empty__plug"/>
            <div className="empty__block empty__label">
                <AddCircleIcon fontSize="large"/>
            </div>
        </div>
    );
}

export default CertEmptyBlock;