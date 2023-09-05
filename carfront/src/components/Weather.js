import React, { useState } from 'react';
import { SERVER_URL } from '../constants';

function Weather(props) {
    const [tourdate, setCdate] = useState({
        cdate: "",
        id: ""
    });
    const [weathers, setTours] = useState([]);
    const onChange = (e) => {
        console.log(e.target.value);
        setCdate({
            ...tourdate,
            [e.target.name] : e.target.value
        });
    }
    const getWeather = () => {
        console.log(`${SERVER_URL}tour/city_weather?CurrentDate=${tourdate.cdate}&areaId=${tourdate.id}`);
        fetch(`${SERVER_URL}tour/city_weather?CurrentDate=${tourdate.cdate}&areaId=${tourdate.id}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data.response.body.items.item);
            setTours(data.response.body.items.item);
        })
        .catch(e=>console.log(e));
    }
    return (
        <div>
            여행지 조회
            <input name="cdate" value={tourdate.cdate} onChange={onChange}/>
            <input name="id" value={tourdate.id} onChange={onChange}/>
            <button onClick={getWeather}>조회</button>
            <ul>
                {weathers.map((t,index)=><li key={index}>{t.tm} {t.totalCityName} - 날씨 : {t.TCI_GRADE}</li>)}
            </ul>
        </div>
    );
}

export default Weather;