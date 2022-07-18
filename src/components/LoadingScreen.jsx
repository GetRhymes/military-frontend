import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import '../css/App.css'

function LoadingScreen() {

    return (
        <div className="loading__screen">
            <CircularProgress/>
        </div>
    );
}

export default LoadingScreen;