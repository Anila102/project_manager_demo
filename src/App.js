import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import SideNavbar from './components/SideNavbar'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    main: '#ED8154',
    white:'#FAFAFA',
    black:'#000000',
    background:'#E4E4E4',
    grey:'rgb(166 162 162)',
  },
};

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
   
      setIsOpen(!isOpen)
  }

  
  return (
    <>
       <ThemeProvider theme={theme}>
    <Navbar theme={theme} toggleSidebar={toggleSidebar}  />
    <SideNavbar  theme={theme} isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <Projects  theme={theme} isOpen={isOpen} />

    </ThemeProvider>
    </>
  );
}

export default App;
