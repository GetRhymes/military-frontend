import React from 'react';
import List from "@mui/material/List";
import ObjectInformatizationAccordion from "./ObjectInformatizationAccordion";
import {Box} from "@mui/material";

function BodyObjectInformatizationBlock({dataObjectsInformatization, setActive, setName}) {
    return (
        <Box height="calc(100% - 60px)" overflow="auto" sx={{marginTop: "10px"}}>
            <List>
                {dataObjectsInformatization.map((oi) => {
                    return (
                        <ObjectInformatizationAccordion
                            id={oi.id}
                            nameObjectInformatization={oi.name}
                            dateUpdate={oi.dateUpdate}
                            numberOfDocuments={oi.numberOfDocuments}
                            cert={oi.cert}
                            si={oi.si}
                            scr={oi.scr}
                            setActive={setActive}
                            setName={setName}
                        />
                    );
                })}
            </List>
        </Box>
    );
}

export default BodyObjectInformatizationBlock;