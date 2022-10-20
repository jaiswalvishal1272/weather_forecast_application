import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [info, setInfo] = useState({});
    const [city, setCity] = useState('Jaipur');
    const key = 'f861c99d919c21d15ccfe9704f191fc5';
    const handleChange = (e) => {
        setCity(e.target.value)
    }
    useEffect(  () => {
        
        axios.get(`http://api.weatherstack.com/current?access_key=${key}&query=${city}`)
        .then((res) => {console.log(res);
                setInfo(res.data);})
        .catch((err) => console.log(err));
        

        

    },[city]);

    
    return(
        <div className="App">
            <h1 className="heading">Weather Forecast</h1>
            <input type="search" onChange={(e) => handleChange(e)}/>
            
            <div className="currTemp">Temperature: {info && info.current && info.current.temperature && info.current.temperature}</div>
            <div className="date-time">
                <div className="date">Time: {info && info.location && info.location.localtime && info.location.localtime }</div>
            </div>
            

            <div className="air">wind
                    <div className="direction">Direction: {info && info.current && info.current.wind_dir && info.current.wind_dir }</div>
                    <div className="speed">Speed: {info && info.current && info.current.wind_speed && info.current.wind_speed }</div>
            </div>
        </div>
    );
};
export default App;



