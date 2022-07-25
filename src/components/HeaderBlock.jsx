import React, {useState} from 'react';
import {Box, Button, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonCreate from "./ButtonCreate";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import axios from "axios";
import {URL_downloadFull} from "../api/Api";
import PopupLoading from "./popup/PopupLoading";
import FileSaver from 'file-saver';

function HeaderBlock({setActive, label, handleSearchValue, isBasePage}) {

    const [activeScreen, setActiveScreen] = useState(false)

    const containerStyle = {
        marginTop: "20px",
        display: 'flex',
        alignItems: 'flex-end',
        height: "30px",
        justifyContent: "space-between"
    }

    const buttonStyle = {
        marginTop: "20px",
        paddingRight: "25px",
        paddingLeft: "25px",
        borderRadius: "30px",
        height: "47px",
        backgroundColor: "#436531;",
        color: "white",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        ":hover": {
            color: "#ffffff",
            backgroundColor: "#64b06d"
        }
    }

    const adornment = (
        <InputAdornment position="start">
            <SearchIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
        </InputAdornment>
    )

    return (
        <Box sx={containerStyle}>
            <TextField
                onChange={handleSearchValue}
                variant="standard"
                label={label}
                sx={{width: "300px"}}
                InputProps={{startAdornment: (adornment)}}
            />
            <Box>
                {
                    isBasePage ?
                        <Button sx={buttonStyle} onClick={() => downloadFull(setActiveScreen)}>
                            <SystemUpdateAltIcon fontSize="medium" />
                        </Button>
                        :
                        null
                }

                <ButtonCreate setActive={setActive}/>
            </Box>
            <PopupLoading active={activeScreen}/>
        </Box>
    );
}

async function downloadFull(setActive) {
    setActive(true)
    const file = await axios.post(URL_downloadFull, {}, {responseType: 'arraybuffer'})
    const fileName = file.headers['content-disposition'].split('filename=')[1];
    const blob = new Blob(
        [file.data],
        {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
    )
    FileSaver.saveAs(blob, fileName)
    setActive(false)
}

export default HeaderBlock;