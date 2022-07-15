import React, {useContext, useEffect, useState} from 'react';
import ListObjectInformatization from "../components/objectInformatization/ListObjectInformatization";
import dataObjectInformatizationJS from "../data/dataObjectInformatization";
import {BaseContext} from "../context/context";


function ObjectInformatizationPage() {

    const {baseId} = useContext(BaseContext)

    const [dataObjectsInformatization, setDataObjectsInformatization] = useState([])

    useEffect(() => {
        setDataObjectsInformatization(dataObjectInformatizationJS)
    }, [])

    return (
        <div className="background main__container__info">
            <ListObjectInformatization dataObjectsInformatization={dataObjectsInformatization}/>
        </div>
    );
}

export default ObjectInformatizationPage;