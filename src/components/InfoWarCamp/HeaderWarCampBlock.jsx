import React from 'react';
import {Box, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonCreate from "../ButtonCreate";

function HeaderWarCampBlock({setActive}) {
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
                label="Введите название части"
                sx={{width: "300px"}}
                InputProps={{startAdornment: (adornment)}}
            />
            <ButtonCreate setActive={setActive}/>
        </Box>
    );
}

export default HeaderWarCampBlock;