import React from 'react';
import {Box, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonCreate from "./ButtonCreate";

function HeaderBlock({setActive, label}) {
    const containerStyle = {
        marginTop: "20px",
        display: 'flex',
        alignItems: 'flex-end',
        height: "30px",
        justifyContent: "space-between"
    }

    const adornment = (
        <InputAdornment position="start">
            <SearchIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
        </InputAdornment>
    )

    return (
        <Box sx={containerStyle}>
            <TextField
                // onChange={handleSearchValue}
                variant="standard"
                label={label}
                sx={{width: "300px"}}
                InputProps={{startAdornment: (adornment)}}
            />
            <ButtonCreate setActive={setActive}/>
        </Box>
    );
}

export default HeaderBlock;