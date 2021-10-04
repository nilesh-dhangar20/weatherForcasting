import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//&#8457;
const App = () => {

  const [inputCity, setinputCity] = useState("");
  const [showCity, setshowCity] = useState("");
  const [temp, settemp] = useState("");
  const [degree, setdegree] = useState(0);
  const [bool, setbool] = useState(false);

  const inputEvent = (event) => {
    setinputCity(event.target.value);
  }
  const callApi = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=8f698e93e56a3f11b15904daef452ff9`);
         const data= await res.json();
        // const filed=data.weather.
        console.log(data.weather[0].main);
        settemp(data.weather[0].main);
        setdegree(data.main.temp)
        setbool(true);
    }
    catch (err) {
      console.log(err);
    }

  }
  const setCity = () => {
    callApi();
    setshowCity(inputCity);
  }
  const removeAll = () => {
    setinputCity("");
    setshowCity("");
    setdegree(273.15);
    settemp("");
    setbool(false);
  }
 
  return (
    <>
      <div className="container mt-5 weather_forcasting_div md-w-50"  >
        <div className="row">
          <h1 className="main_heading text-center mt-4">check weather status</h1>
        </div>
        <div className="row">
          <div className="col md-10 col-sm-12 offset-md-3 mt-5 mb-5 ">
            <input type="search" placeholder="search your city" className="input_city_search text-center "
              onChange={inputEvent} value={inputCity}
            />
            <button className="search_btn" onClick={setCity}>search</button>
          </div>
        </div>
        <div className="row show_div text-center">
          <h1>{showCity}</h1>
          {
          bool?  <h1><span>{Math.floor(degree-273.15)} </span><sup>&#8451;</sup>   {temp}</h1>:
          <h1></h1>
          }
          
        </div>
        <div className="row text-center">
          <div className="col mb-5 mt-5">
            <button className="btn remove_btn" onClick={removeAll}>Remove</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
