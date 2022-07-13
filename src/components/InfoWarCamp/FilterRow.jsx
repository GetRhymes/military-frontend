import React from 'react';

function FilterRowInfo({nameRow, valueRow}) {

    const styleContainer = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
    }

    return (
        <div style={styleContainer}>
            <p className="body__accordion__row_info body__accordion__row__left">{nameRow}</p>
            <p className="body__accordion__row_info body__accordion__row__right">{valueRow}</p>
        </div>
    );

}

export default FilterRowInfo;