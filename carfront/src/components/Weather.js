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
            <input name="cdate" value={tourdate.cdate} onChange={onChange} placeholder='날짜입력'/>
            <select name="id" onChange={onChange}>
                <option value="2635000000">부산 해운대구</option>
                <option value="3114000000">울산 남구</option>
                <option value="1162000000">서울 관악구</option>
                <option value="4677000000">전남 고흥군</option>
                <option value="4511100000">전북 전주시</option>
                <option value="4145000000">경기 하남시</option>
                <option value="4717000000">경북 안동시</option>
                <option value="4711100000">경북 포항시</option>
                <option value="2729000000">대구 달서구</option>
                <option value="4678000000">전남 보성군</option>
            </select>
            <button onClick={getWeather}>조회</button>
            <ul>
                {weathers.map((t,index)=><li key={index}>{t.tm} {t.totalCityName} - 날씨 : {t.TCI_GRADE}</li>)}
            </ul>
        </div>
    );
}

export default Weather;