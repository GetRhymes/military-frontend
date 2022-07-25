import React from 'react';
import LabelInBlock from "./LabelInBlock";
import ComponentTable from "./ComponentTable";
import {ComponentContext} from "../../context/context";

function ComponentsIoBlock({setActive, setComponentName, setComponentSeries, setRemoveComponent, dataComponent, setIdComp}) {

    return (
        <ComponentContext.Provider value={setActive}>
        <div className="component_card background__card">
            <LabelInBlock label="Состав" isHeader={false}/>
            <div className="component__content">
                <ComponentTable
                    dataComponent={dataComponent}
                    setComponentName={setComponentName}
                    setComponentSeries={setComponentSeries}
                    setRemoveComponent={setRemoveComponent}
                    setIdComp={setIdComp}
                />
            </div>
        </div>
        </ComponentContext.Provider>
    );
}

export default ComponentsIoBlock;