import React, { useState } from 'react';
import { SERVER_URL } from '../constants';

function Tour(props) {
    const [tourdate, setCdate] = useState({
        cdate: "",
        id: ""
    });
    const [tours, setTours] = useState([]);
    const onChange = (e) => {
        console.log(e.target.value);
        setCdate({
            ...tourdate,
            [e.target.name] : e.target.value
        });
    }
    const getTour = () => {
        fetch(`${SERVER_URL}tour/wea?CurrentDate=${tourdate.cdate}&CourseId=${tourdate.id}`)
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
            <select name="id" onChange={onChange}>
                <option value="1">남호고택에서의 하룻밤</option>
                <option value="2">고찰에서 캠핑을 하다</option>
                <option value="3">밝고 청정한 영양의 산천</option>
                <option value="4">세월의 아름다움을 찾아서</option>
                <option value="5">속리산이 그려낸</option>
                <option value="6">남호고택에서의 하룻밤</option>
                <option value="7">남호고택에서의 하룻밤</option>
                <option value="8">남호고택에서의 하룻밤</option>
                <option value="9">남호고택에서의 하룻밤</option>
                <option value="10">남호고택에서의 하룻밤</option>
            </select>
            <button onClick={getTour}>조회</button>
            <ul>
                {tours.map((t,index)=><li key={index}>{t.tm} {t.thema} : {t.courseName} : {t.spotName}</li>)}
            </ul>
        </div>
    );
}

export default Tour;