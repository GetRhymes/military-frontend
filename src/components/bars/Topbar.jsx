import React, {useContext} from 'react';
import '../../css/Topbar.css'
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Topbar({open, handleDrawerOpen}) {

    return (
        <div className="top__bar">
            <div className="label__block">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        color: 'white',
                        marginLeft: "12px",
                        marginTop: "12.5px",
                        marginBottom: "12.5px",
                        ...(open && {display: 'none'}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                {/*<Path label={rootPath}/>*/}
                {/*{create ? <Path label="Создать"/> : null}*/}

            </div>
        </div>
    );
}

export default Topbar;


function Path({label}) {
    return (
        <div className="path__block">
            <ArrowRightIcon fontSize="large" sx={{marginLeft: "10px"}}/>
            <p className="label__sidebar">{label}</p>
        </div>
    );
}