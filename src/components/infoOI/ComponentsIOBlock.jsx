import React from 'react';
import LabelInBlock from "./LabelInBlock";
import ComponentTable from "./ComponentTable";
import dataComponentsJS from "../../data/dataComponent";

function ComponentsIoBlock(props) {

    return (
        <div className="component_card background__card">
            <LabelInBlock label="Состав" isHeader={false}/>
            <div className="component__content">
                <ComponentTable dataComponent={dataComponentsJS}/>
            </div>
        </div>
    );
}

export default ComponentsIoBlock;