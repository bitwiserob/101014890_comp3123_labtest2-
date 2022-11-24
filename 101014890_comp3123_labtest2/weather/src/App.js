import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const api ={
  key: "4be652987aa8129403b8d090deef289b",
  base: "http://api.openweathermap.org/data/2.5/"
}







const App = () => {
  const handleClick = () =>{
    axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(response => {
      setQuery('');
      setWeather(response.data);
      console.log(response.data);
    })
    .catch(err => {
      console.log(err)
      alert("An error has occurred")
    });


    axios.get(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
    
  };
  
  let curdate = new Date().toDateString();

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const [fdw, setFdw] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <div className="card">
            <Card>
             
              <Card.Body className="cardb">
              {typeof weather.main != "undefined" &&
                <img variant="top" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width='250px' height="250px"/>
              }
                <Card.Title>
                  <div className="l">Weather</div> 
                  <div className="l"><input
                    className='sbox'
                    type="text"
                    placeholder='Enter Location'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  /></div>
                  <Button onClick={handleClick} >Get weather</Button>
                  
                  
                  
                </Card.Title>
                {typeof weather.main != "undefined" &&
                  <div className='details'>
                    <div> {weather.name} 
                    <div> CURRENT TEMP IS: {weather.main.temp} c</div>
                     <div>THERE IS: {weather.weather[0].description}</div>
                    
                    <div>MIN TEMP IS: {weather.main.temp_min}c</div>
                    <div>MAX TEMP IS: {weather.main.temp_max}c</div>
                    <div>HUMIDITY IS: {weather.main.humidity}%</div>
                    </div>
                   
                  </div>
                  
                }
              </Card.Body>
            </Card>
          </div>
          
        </Container>
      </header>
      

    </div>
  );
}

export default App;
