import React, {useEffect, useState} from 'react';
import ListObjectInformatization from "../components/objectInformatization/ListObjectInformatization";
import dataObjectInformatizationJS from "../data/dataObjectInformatization";
import axios from "axios";
import {URL_getDataOI, URL_getDataWarCamp} from "../api/Api";
import LoadingScreen from "../components/LoadingScreen";
import {useStateIfMounted} from "use-state-if-mounted";


function ObjectInformatizationPage({setOiId, id}) {

    const [dataObjectsInformatization, setDataObjectsInformatization] = useStateIfMounted([])

    const [loading, setLoading] = useState(false)

    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetchDataOI(setDataObjectsInformatization, setLoading, id)
    }, [update])

    return (
        loading ?
            <LoadingScreen/>
            :
            <div className="background main__container__info">
                <ListObjectInformatization
                    dataObjectsInformatization={dataObjectsInformatization}
                    setOiId={setOiId}
                    setLoading={setLoading}
                    idMB={id}
                    setUpdate={setUpdate}
                />
            </div>
    );
}

async function fetchDataOI(setDataObjectsInformatization, setLoading, id) {
    setLoading(true)
    if (id === "") {
        id = localStorage.getItem('idMB')
    }
    const data = await axios.post(URL_getDataOI, { id })
    setDataObjectsInformatization(data.data)
    setLoading(false)
}

export default ObjectInformatizationPage;