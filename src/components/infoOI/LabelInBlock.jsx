import React from "react";

function LabelInBlock({label, isHeader}) {
    return (
        <div className={isHeader ? "header__label font__header" : "header__label font__body"}>
            <p>{label}</p>
        </div>
    );
}

export default LabelInBlock;