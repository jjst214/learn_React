import './App.css';
import { useEffect, useState } from 'react';
import CarFront from './components/CarFront';
import { Route, Routes } from 'react-router-dom';
import Tour from './components/Tour';
import Weather from './components/Weather';
function App() {
  const [isAuthenticated, setAuth] = useState(false);
  const loginAuth = () => {
    setAuth(true);
  }
  const logoutAuth = () => {
    setAuth(false);
    //로그아웃시 jwt 토큰 삭제
    sessionStorage.removeItem("jwt");
  }
  //마운트 될때 실행
  useEffect(()=>{
    if(sessionStorage.getItem("jwt")){
      setAuth(true);
    }
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CarFront loginAuth={loginAuth} logoutAuth={logoutAuth} isAuthenticated={isAuthenticated}/>} />
        <Route path="/tour" element={<Tour/>}/>
        <Route path='/weather' element={<Weather/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
