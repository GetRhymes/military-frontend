import List from "@mui/material/List";
import WarCampAccordion from "./WarCampAccordion";
import React from 'react';
import {Box} from "@mui/material";

function BodyWarCampBlock({dataWarCamp, setActive, setName}) {

    return (
        <Box height="calc(100% - 60px)" overflow="auto" sx={{marginTop: "10px"}}>
            <List>
                {dataWarCamp.map((camp) => {
                    return (
                        <WarCampAccordion
                            baseId={camp.id}
                            nameWarCamp={camp.name}
                            numberWarCamp={camp.number}
                            locationWarCamp={camp.location}
                            setActive={setActive}
                            setName={setName}
                        />
                    );
                })}
            </List>
        </Box>
    );
}

export default BodyWarCampBlock;