import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import { DataGrid } from '@mui/x-data-grid';

function CarList(props) {
    const [cars, setCars] = useState([]);
    //마운트될 때 실행
    useEffect(()=>{
        fetchCar();
    },[])
    //목록요청
    const fetchCar = () => {
        fetch(`${SERVER_URL}api/cars`)
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(e => console.log(e));
    }
    //삭제요청
    const onDelete = (url) => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            fetch(url, {method:"DELETE"})
            .then(response=>{
                if(response.ok){
                    window.alert("삭제되었습니다.");
                    fetchCar();
                }else{
                    alert("삭제실패");
                }
            })
            .catch(e=>console.log(e));
        }
    }
    const columns = [
        {field:"brand", headerName:"Brand", width:200},
        {field:"model", headerName:"Model", width:200},
        {field:"color", headerName:"Color", width:200},
        {field:"year", headerName:"Year", width:200},
        {field:"price", headerName:"Price", width:200},
        {
            field:"_links.self.href",
            headerName:"",
            sorttable: false,
            filterable: false,
            renderCell: row =>
            <button onClick={()=>onDelete(row.id)}>삭제</button>
        }
    ]
    return (
        <div>
            <div style={{width:1200, margin: "0 auto"}}>
                <DataGrid rows={cars} columns={columns}
                 getRowId={row=>row._links.self.href}/>
            </div>
           {/* <table>
                <tbody>
                    {
                        cars.map((car,index)=>
                            <tr key={index}>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.color}</td>
                                <td>{car.year}</td>
                                <td>{car.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
                */}
        </div>
    );
}

export default CarList;