import React from 'react';
import List from "@mui/material/List";
import ObjectInformatizationAccordion from "./ObjectInformatizationAccordion";
import {Box} from "@mui/material";

function BodyObjectInformatizationBlock({dataObjectsInformatization, setActive, setName, searchValue, setOiId, setActiveScreen}) {
    return (
        <Box height="calc(100% - 60px)" overflow="auto" sx={{marginTop: "10px"}}>
            <List>
                {dataObjectsInformatization.map((oi) => {
                    if (searchValue !== null) {
                        if (oi.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            return (
                                <ObjectInformatizationAccordion
                                    key={oi.id}
                                    id={oi.id}
                                    nameObjectInformatization={oi.name}
                                    dateUpdate={oi.dateUpdate}
                                    numberOfDocuments={oi.numberOfDocuments}
                                    // cert={oi.cert}
                                    // si={oi.si}
                                    // scr={oi.scr}
                                    cert={null}
                                    si={null}
                                    scr={null}
                                    setActive={setActive}
                                    setName={setName}
                                    setOiId={setOiId}
                                    setActiveScreen={setActiveScreen}
                                />
                            );
                        }
                    } else {
                        return (
                            <ObjectInformatizationAccordion
                                key={oi.id}
                                id={oi.id}
                                nameObjectInformatization={oi.name}
                                dateUpdate={oi.dateUpdate}
                                numberOfDocuments={oi.numberOfDocuments}
                                cert={oi.cert}
                                si={oi.si}
                                scr={oi.scr}
                                setActive={setActive}
                                setName={setName}
                                setOiId={setOiId}
                                setActiveScreen={setActiveScreen}
                            />
                        );
                    }
                })}
            </List>
        </Box>
    );
}

export default BodyObjectInformatizationBlock;