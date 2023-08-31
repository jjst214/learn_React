import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList from './components/CarList';
function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography>
            CarShop
          </Typography>
        </Toolbar>
      </AppBar>
      <CarList/>
    </div>
  );
}

export default App;
