import React, {useEffect, useState} from 'react';
import ListObjectInformatization from "../components/objectInformatization/ListObjectInformatization";
import dataObjectInformatizationJS from "../data/dataObjectInformatization";


function ObjectInformatizationPage({setOiId}) {

    const [dataObjectsInformatization, setDataObjectsInformatization] = useState([])

    useEffect(() => {
        setDataObjectsInformatization(dataObjectInformatizationJS)
    }, [])

    return (
        <div className="background main__container__info">
            <ListObjectInformatization dataObjectsInformatization={dataObjectsInformatization} setOiId={setOiId}/>
        </div>
    );
}

export default ObjectInformatizationPage;