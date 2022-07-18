import React from 'react';
import List from "@mui/material/List";
import ObjectInformatizationAccordion from "./ObjectInformatizationAccordion";
import {Box} from "@mui/material";

function BodyObjectInformatizationBlock({dataObjectsInformatization, setActive, setName, searchValue, setOiId}) {
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
                                    cert={oi.cert}
                                    si={oi.si}
                                    scr={oi.scr}
                                    setActive={setActive}
                                    setName={setName}
                                    setOiId={setOiId}
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
                            />
                        );
                    }
                })}
            </List>
        </Box>
    );
}

export default BodyObjectInformatizationBlock;