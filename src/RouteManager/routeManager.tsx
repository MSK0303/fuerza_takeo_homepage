import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home  from '../pages/home';
import Club  from '../pages/club';
import Experience  from '../pages/experience';
import Contact  from '../pages/contact';
import NotFound from '../pages/notfound';

const RouteManager:React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path='/fuerza_takeo_homepage/'  element={<Home />} />
                <Route  path='/fuerza_takeo_homepage/club' element={<Club/>}/>
                <Route  path='/fuerza_takeo_homepage/experience' element={<Experience />}/>
                <Route  path='/fuerza_takeo_homepage/contact' element={<Contact />}/>
                <Route  path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteManager;
