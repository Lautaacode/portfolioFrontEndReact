import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Indexapp from '../pages/Indexapp';

function Routesapp() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Indexapp />} />
                <Route path="*" element={'not found'}  />
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routesapp;