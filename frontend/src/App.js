import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import 'aos/dist/aos.css';
// import About from './components/pages/About';
import SignUp from './pages/Signup';
import Home from './pages/home/Home';
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Category from './pages/category/category';
import Categories_data from './pages/category/categories_data';
import Store from './pages/Store';
import 'bootstrap/dist/css/bootstrap.css';
import Potrait from './pages/category/potrait';


function App() {
  const [isDarkModeOS, setIsDarkModeOS] = useState(false);
  const [isDarkModeSwitch, setIsDarkModeSwitch] = useState(false);

  useEffect(() => {
    // Listen for changes in OS dark mode setting
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkModeOS(mediaQuery.matches);
    const handleChange = () => setIsDarkModeOS(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const preferedMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [curtheme, setcurtheme] = useState(preferedMode);
  const handleSwitchChange = (event) => {
    setIsDarkModeSwitch(event.target.checked);
    setcurtheme(event.target.checked);
  }

  const theme = createTheme({
    palette: {
      mode: isDarkModeSwitch ? 'dark' : isDarkModeOS ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(curtheme ? 'dark' : 'light');
  }, [curtheme]);
  
  return (
     <div >
     <ThemeProvider theme={theme}>
    <CssBaseline />
   
    <Router>
    <Navbar isDarkMode={isDarkModeSwitch || isDarkModeOS} handleSwitchChange={handleSwitchChange} />
   
      <Routes>
        <Route path='ArtWeb-E/home' element={<Home isDarkMode = {isDarkModeSwitch || isDarkModeOS}/>} />
        <Route path='ArtWeb-E/contact' element={<Contact />} />
        <Route path='ArtWeb-E/sign-up' element={<SignUp />} />
        <Route path='ArtWeb-E/store' element={<Store />} />

        {/* <Route path='/statues' element={<statues />} /> */}
       
        <Route path='ArtWeb-E/potrait' element={<Potrait />} />
        <Route path='ArtWeb-E/category' element={<Category data={Categories_data.all_category} />} />
      </Routes>
    </Router>
  
</ThemeProvider>
     </div>



  )
}

export default App;