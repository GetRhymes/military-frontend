import React from 'react';

function FilterRowInfo({nameRow, valueRow, afterDivider, isOI}) {

    const styleContainer = {
        marginTop: afterDivider !== undefined ? "5px" : "",
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
    }

    return (
        <div style={styleContainer}>
            <p className={
                isOI ?
                    "body__accordion__row_info accordion__row__left__oi"
                    :
                    "body__accordion__row_info body__accordion__row__left"
            }>{nameRow}</p>
            <p className={
                isOI ?
                    "body__accordion__row_info accordion__row__right__io"
                    :
                    "body__accordion__row_info body__accordion__row__right"
            }>
                {valueRow}
            </p>
        </div>
    );

}

export default FilterRowInfo;