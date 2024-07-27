import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage.tsx";
import Authentication from "./Components/Authentication/Authentication.tsx";

const App:React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={true?<Homepage/> : <Authentication/>}></Route>
            </Routes>
        </div>
    );
};

export default App