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
                <Route  path='/'  element={<Home />} />
                <Route  path='/club' element={<Club/>}/>
                <Route  path='/experience' element={<Experience />}/>
                <Route  path='/contact' element={<Contact />}/>
                <Route  path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteManager;
