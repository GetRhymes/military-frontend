import React, {useEffect, useState} from 'react';
import ListWarCamp from "../components/infoWarCamp/ListWarCamp";
import dataWarCampJS from "../data/dataWarCamp";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";
import {URL_getDataWarCamp} from "../api/Api";

function BasePage() {

    const [dataWarCamp, setDataWarCamp] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // fetchDataWarCamp(setDataWarCamp, setLoading)
        setDataWarCamp(dataWarCampJS)
    }, [])

    return (
        loading ?
            <LoadingScreen/>
            :
            <div className="background main__container__info">
                <ListWarCamp dataWarCamp={dataWarCamp} setLoading={setLoading}/>
            </div>
    );
}

export default BasePage;

async function fetchDataWarCamp(setDataWarCamp, setLoading) {
    setLoading(true)
    const data = await axios.get(URL_getDataWarCamp)
    setDataWarCamp(data.data)
    setLoading(false)
}