import React from "react";
import './App.css';
import SideNavbar from './components/SideNavbar'
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    main: '#ED8154',
    white:'#FAFAFA',
    black:'#000000',
    background:'#E4E4E4',
  },
};
function App() {
  return (
    <>
       <ThemeProvider theme={theme}>
    <SideNavbar />

    </ThemeProvider>
    </>
  );
}

export default App;
