import List from "@mui/material/List";
import WarCampAccordion from "./WarCampAccordion";
import React from 'react';
import {Box} from "@mui/material";

function BodyWarCampBlock({dataWarCamp, setActive, setName, setActiveCreate, setBaseId, searchValue, setActiveScreen, setUpdate}) {

    return (
        <Box height="calc(100% - 60px)" overflow="auto" sx={{marginTop: "10px"}}>
            <List>
                {dataWarCamp.map((camp) => {
                    if (searchValue !== null) {
                        if (camp.nameWarCamp.toLowerCase().includes(searchValue.toLowerCase())) {
                            return (
                                <WarCampAccordion
                                    key={camp.id}
                                    baseId={camp.id}
                                    nameWarCamp={camp.nameWarCamp}
                                    numberWarCamp={camp.numberWarCamp}
                                    locationWarCamp={camp.location}
                                    setActive={setActive}
                                    setName={setName}
                                    setActiveCreate={setActiveCreate}
                                    setBaseId={setBaseId}
                                    setActiveScreen={setActiveScreen}
                                    setUpdate={setUpdate}
                                />
                            );
                        }
                    } else {
                        return (
                            <WarCampAccordion
                                key={camp.id}
                                baseId={camp.id}
                                nameWarCamp={camp.nameWarCamp}
                                numberWarCamp={camp.numberWarCamp}
                                locationWarCamp={camp.location}
                                setActive={setActive}
                                setName={setName}
                                setActiveCreate={setActiveCreate}
                                setBaseId={setBaseId}
                                setActiveScreen={setActiveScreen}
                                setUpdate={setUpdate}
                            />
                        );
                    }
                })}
            </List>
        </Box>
    );
}

export default BodyWarCampBlock;