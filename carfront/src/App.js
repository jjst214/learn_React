import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import { useEffect, useState } from 'react';
import Login from './components/Login';
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
      <AppBar position="static">
        <Toolbar>
          <Typography>
            CarShop {isAuthenticated ? <span onClick={logoutAuth}>Logout</span> : ""}
          </Typography>
        </Toolbar>
      </AppBar>
      {isAuthenticated ? <CarList/> : <Login loginAuth={loginAuth}/> }
    </div>
  );
}

export default App;
