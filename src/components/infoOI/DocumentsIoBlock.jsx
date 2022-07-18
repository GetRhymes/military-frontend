import React from 'react';
import LabelInBlock from "./LabelInBlock";
import DocumentTable from "./DocumentTable";
import dataDocumentsJS from "../../data/dataDocuments";

function DocumentsIoBlock(props) {
    return (
        <div className="component_card background__card">
            <LabelInBlock label="Документы" isHeader={false}/>
            <div className="component__content">
                <DocumentTable dataDocument={dataDocumentsJS}/>
            </div>
        </div>
    );
}

export default DocumentsIoBlock;