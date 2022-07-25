import React from 'react';
import LabelInBlock from "./LabelInBlock";
import DocumentTable from "./DocumentTable";
import {DocumentContext} from "../../context/context";

function DocumentsIoBlock({setActive, setDocumentName, setRemoveDocument, setDocumentNumReg, dataDocument, setIdDoc}) {
    return (
        <DocumentContext.Provider value={setActive}>
            <div className="component_card background__card">
                <LabelInBlock label="Документы" isHeader={false}/>
                <div className="component__content">
                    <DocumentTable
                        dataDocument={dataDocument}
                        setDocumentName={setDocumentName}
                        setRemoveDocument={setRemoveDocument}
                        setDocumentNumReg={setDocumentNumReg}
                        setIdDoc={setIdDoc}
                    />
                </div>
            </div>
        </DocumentContext.Provider>
    );
}

export default DocumentsIoBlock;