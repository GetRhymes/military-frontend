import React, {useEffect, useState} from 'react';
import ListWarCamp from "../components/InfoWarCamp/ListWarCamp";
import dataWarCampJS from "../data/dataWarCamp";

function InfoPage(props) {

    const [dataWarCamp, setDataWarCamp] = useState([])

    useEffect(() => {
        setDataWarCamp(dataWarCampJS)
    }, [])

    return (
        <div className="background main__container__info">
            <ListWarCamp dataWarCamp={dataWarCamp}/>
        </div>
    );
}

export default InfoPage;