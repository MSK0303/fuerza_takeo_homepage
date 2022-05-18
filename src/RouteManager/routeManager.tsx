import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home  from '../pages/home';
import Club  from '../pages/club';
import Experience  from '../pages/experience';
import Contact  from '../pages/contact';

const RouteManager:React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  index={true}  element={<Home />} />
                <Route  path='/club' element={<Club/>}/>
                <Route  path='/experience' element={<Experience />}/>
                <Route  path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteManager;
