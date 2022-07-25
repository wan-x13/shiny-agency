import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Header from './components/Header';
import Freelances from './pages/Freelances';
import Profils from './pages/Profils/Profils';


import Home from './pages/Home';
import Results from './pages/Results';
import Survey from './pages/Survey';
import { ThemeProvider } from './utils/context';
import Footer from './components/Footer/Footer';
import GlobalStyle from './utils/style/GlobalStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <ThemeProvider>
   <GlobalStyle/>
   <Header/>

   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/survey/:questionNumber' element ={<Survey/>}/>
    <Route path='*'element={<Error/>}/>
    <Route path='/freelances' element={<Freelances/>} />
    <Route path='/results'element={<Results/>}/>
    <Route path='/profils' element={<Profils/>}/>
   </Routes>
   <Footer/>
   </ThemeProvider>
   </BrowserRouter>


  </React.StrictMode>
);


