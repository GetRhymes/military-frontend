import React, {useEffect, useState} from 'react';
import ListWarCamp from "../components/infoWarCamp/ListWarCamp";
import dataWarCampJS from "../data/dataWarCamp";

function BasePage() {

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

export default BasePage;