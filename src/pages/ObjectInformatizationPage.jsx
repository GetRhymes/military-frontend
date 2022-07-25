import React, {useEffect, useState} from 'react';
import ListObjectInformatization from "../components/objectInformatization/ListObjectInformatization";
import dataObjectInformatizationJS from "../data/dataObjectInformatization";
import axios from "axios";
import {URL_getDataOI, URL_getDataWarCamp} from "../api/Api";
import LoadingScreen from "../components/LoadingScreen";


function ObjectInformatizationPage({setOiId}) {

    const [dataObjectsInformatization, setDataObjectsInformatization] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setDataObjectsInformatization(dataObjectInformatizationJS)
        // fetchDataOI(setDataObjectsInformatization, setLoading)
    }, [])

    return (
        loading ?
            <LoadingScreen/>
            :
            <div className="background main__container__info">
                <ListObjectInformatization dataObjectsInformatization={dataObjectsInformatization} setOiId={setOiId} setLoading={setLoading}/>
            </div>
    );
}

async function fetchDataOI(setDataObjectsInformatization, setLoading) {
    setLoading(true)
    const data = await axios.get(URL_getDataOI)
    setDataObjectsInformatization(data.data)
    setLoading(false)
}

export default ObjectInformatizationPage;