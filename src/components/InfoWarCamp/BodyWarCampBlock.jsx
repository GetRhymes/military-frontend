import List from "@mui/material/List";
import WarCampAccordion from "./WarCampAccordion";
import React from 'react';

function BodyWarCampBlock({dataWarCamp, setActive, setName}) {
    return (
        <List>
            {dataWarCamp.map((camp) => {
                return (
                    <WarCampAccordion
                        nameWarCamp={camp.name}
                        numberWarCamp={camp.number}
                        locationWarCamp={camp.location}
                        setActive={setActive}
                        setName={setName}
                    />
                );
            })}
        </List>
    );
}

export default BodyWarCampBlock;