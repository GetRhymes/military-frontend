import {Button, ButtonGroup, Divider} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterRowInfo from "../infoWarCamp/FilterRow";
import React from "react";
import LabelInBlock from "./LabelInBlock";

function CertOIBlock({cert, setActive, setActiveRemove, setCertNumber}) {

    return (
        <div className="header__card background__card">
            <div className="cert__body">
                <LabelInBlock label={"Аттестат № " + cert.numberCert} isHeader={false}/>
                <ButtonGroup sx={{ boxShadow: "unset", borderRadius: "12px", marginBottom: "10px" }} >
                    <Button sx={{ height : "30px"}} onClick={() => setActive(true)}>
                        <EditIcon/>
                    </Button>
                    <Button sx={{ height : "30px"}} onClick={ () => {
                        setCertNumber(cert.numberCert)
                        setActiveRemove(true)
                    }}>
                        <DeleteIcon/>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <Divider/>
                <FilterRowInfo nameRow="Орган сертификации:" valueRow={cert.owner} isOI={false} afterDivider={true}/>
                <FilterRowInfo nameRow="Категория:" valueRow={cert.category} isOI={false}/>
                <FilterRowInfo nameRow="Дата аттестации:" valueRow={cert.dateCreateCert} isOI={false}/>
                <FilterRowInfo nameRow="Дата переаттестации:" valueRow={cert.dateFinishCert} isOI={false}/>
            </div>
        </div>
    );
}

export default CertOIBlock;