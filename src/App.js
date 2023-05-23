import { AppBar, Button, Grid, ThemeProvider } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { createTheme } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './sections/About';
import Home from './sections/Home';
import Login from './sections/Login';
import Register from './sections/Register';


const theme = createTheme({
  palette: {
    primary: {
      main: '#763408'
    },
    secondary: {
      main: '#f3c23a'
    },
  }
});



function App() {


  const [ModusB, setModusB] = useState(true)

  const handleClick = () => {
    ModusB ?
      setModusB(false) :
      setModusB(true)
  }


  return (
    <div className={ModusB ? "App" : "App dark"}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppBar position='sticky' color='primary' sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", p: "1rem" }}>
            <Link style={{ color: '#f5f7f9' }} to="/" >Home</Link>
            <Link style={{ color: '#f5f7f9' }} to="/page" >page</Link>
            <Link style={{ color: '#f5f7f9' }} to="/about">About us</Link>
            <Link style={{ color: '#f5f7f9' }} to="/login">Login</Link>
            <Link style={{ color: '#f5f7f9' }} to="/register">Register</Link>
            <Button variant='contained' color='secondary' onClick={handleClick}>
              {ModusB ? "light" : "dark"}
            </Button>

          </AppBar>
          <Grid display={"flex"} justifyContent={"center"} alignItems='center' width="100%" height={'100%'} >
            <Routes>
              <Route exact path="/" element={<Home></Home>
              } />
              <Route path="/page" element={<p>page 2</p>
              } />
              <Route path="/about" element={<About />
              } />
              <Route path="/login" element={<Login />
              } />
              <Route path="/register" element={<Register />
              } />
            </Routes>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
