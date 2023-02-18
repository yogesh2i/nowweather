import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDropletSlash,
  faDroplet,
  faDownLeftAndUpRightToCenter,
  faSun,
  faEye,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";
import Footer from "./Footer";
function Main({ place }) {

  const [load, setLoad] = useState(true);
  const [data, setData] = useState("");
  const [today, setToday] = useState("");
  let url = `https://api.weatherapi.com/v1/forecast.json?key=f07a9c924a204b2cba1113545232801&q=${place}&aqi=yes&days=10`;
  async function fetchData(url) {
    try {
      setLoad(true);
      let response = await fetch(url);
      let res = await response.json();
      setData(res);
      setToday(res.forecast.forecastday[0]);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let s = (data !== '' && (data.location.localtime.slice(-5)))
    if (load === false) {
      if (data !== '' && (s.slice(0, 2)) > 16) {
        document.getElementById('cont').style.background = "linear-gradient(to bottom, #0f2027,#203a43,#2c5364)";
        document.getElementById('top').style.backgroundImage = "url('https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyClear-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70')"
      } else if (data !== '' && (s.slice(0, 2)) > 11) {
        document.getElementById('cont').style.background = "linear-gradient(to bottom, #fceabb,#fccd4d,#f7b733)";
        document.getElementById('top').style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.gVIEKIE-jtNJ2fUrsaZB6wHaEK&pid=Api&P=0')"
      } else if (data !== '' && (s.slice(0, 2)) > 6) {
        document.getElementById('cont').style.background = "linear-gradient(to bottom, #ffd89b,#ffd066,#ffb347)";
        document.getElementById('top').style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.f743id-Octgs7ZCnuNtBzAHaE8&pid=Api&P=0')"
      } else {
        document.getElementById('cont').style.background = "linear-gradient(to bottom, #0f2027,#203a43,#2c5364)";
        document.getElementById('top').style.backgroundImage = "url('https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyClear-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70')"
      }
    }
  }, [load, data])
  useEffect(() => {
    fetchData(url);
  }, [place, url]);

  function handleClick(set) {
    let hourly = document.getElementById("hourly");
    let daily = document.getElementById("daily");
    if (set === "h") {
      daily.style.display = "none";
      hourly.style.display = "flex";
      set = "d";
    } else if (set === "d") {
      hourly.style.display = "none";
      daily.style.display = "flex";
      set = "h";
    }
  }
  return (
    <>
      {load ? <Spinner /> :


        <Container fluid id="cont">
          <div className="container-fluid top text-white" id="top">
            <div className="address">
              <span>{data !== "" && data.location.name}</span>&nbsp;As of{" "}
              {data !== "" && data.location.localtime.slice(-5)} IST
            </div>
            <div className="stats d-flex">
              <div className="data d-flex flex-column">
                <span>{data !== "" && data.current.temp_c}°</span>
                <span>{data !== "" && data.current.condition.text}</span>
                <span>
                  Day {today !== "" && today.day.maxtemp_c}° Night{" "}
                  {today !== "" && today.day.mintemp_c}°
                </span>
              </div>
              <div className="image">
                <img
                  src={data !== "" ? data.current.condition.icon : undefined}
                  alt="png"
                />
              </div>
            </div>
          </div>
          <div className="info fore">
            <p>Today`s forecast for {data !== "" && data.location.name}</p>
            <div className="shift">
              <div>
                <span>Morning</span>
                <img
                  src={today !== "" ? today.hour[7].condition.icon : undefined}
                  alt="weather"
                />
                <span>{today !== "" && today.hour[7].feelslike_c}° </span>
              </div>
              <div>
                <span>Noon</span>
                <img
                  src={today !== "" ? today.hour[12].condition.icon : undefined}
                  alt="weather"
                />
                <span>{today !== "" && today.hour[12].feelslike_c}° </span>
              </div>
              <div>
                <span>Night</span>
                <img
                  src={today !== "" ? today.hour[20].condition.icon : undefined}
                  alt="weather"
                />
                <span>{today !== "" && today.hour[20].feelslike_c}° </span>
              </div>
            </div>
          </div>
          <div className="weather info">
            <p>Weather Today In {data !== "" && data.location.name}</p>
            <div className="d-flex justify-content-between">
              <div className="feel text-center">
                <div>
                  <h1>{data !== "" && data.current.feelslike_c}°</h1>
                  <span>Feels Like</span>
                </div>
              </div>
              <div className="sun text-center">
                <p>SunRise: {today !== "" && today.astro.sunrise}</p>
                <p>SunSet: {today !== "" && today.astro.sunset}</p>
              </div>
            </div>
            <hr />
            <div className="wind attribute">
              <p>
                <span>
                  <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>&nbsp;
                </span>
                <span>Wind</span>
              </p>
              <p>{data !== "" && data.current.wind_kph}km/hr</p>
            </div>
            <hr />
            <div className="humidity attribute">
              <p>
                <span>
                  <FontAwesomeIcon icon={faDropletSlash}></FontAwesomeIcon>&nbsp;
                </span>
                <span>Humidity</span>
              </p>
              <p>{data !== "" && data.current.humidity}%</p>
            </div>
            <hr />
            <div className="dew attribute">
              <p>
                <span>
                  <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>&nbsp;
                </span>
                <span>Dew Point</span>
              </p>
              <p>{today !== "" && today.hour[12].dewpoint_c}°</p>
            </div>
            <hr />
            <div className="pressure attribute">
              <p>
                <span>
                  <FontAwesomeIcon
                    icon={faDownLeftAndUpRightToCenter}
                  ></FontAwesomeIcon>
                  &nbsp;
                </span>
                <span>Air Pressure</span>
              </p>
              <p>{data !== "" && data.current.pressure_mb}mb</p>
            </div>
            <hr />
            <div className="uv attribute">
              <p>
                <span>
                  <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>&nbsp;
                </span>
                <span>UV Index</span>
              </p>
              <p>{data !== "" && data.current.uv} out of 10</p>
            </div>
            <hr />
            <div className="visibility attribute">
              <p>
                <span>
                  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>&nbsp;
                </span>
                <span>Visibility</span>
              </p>
              <p>{data !== "" && data.current.vis_km}km</p>
            </div>
            <hr />
            <div className="moon attribute">
              <p>
                <span>
                  <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>&nbsp;
                </span>
                <span>Moon Phase</span>
              </p>
              <p>{today !== "" && today.astro.moon_phase}</p>
            </div>
            <hr />
          </div>
          <div className="forecast info">
            <p>Hourly,Daily Forecast</p>
            <div className="attribute">
              <Button className="btn-sm" onClick={() => handleClick("h")}>
                Hourly
              </Button>
              <Button className="btn-sm" onClick={() => handleClick("d")}>
                Daily
              </Button>
            </div>
            <div className="hourly" id="hourly">
              <ul>
                {today !== "" &&
                  today.hour.map((e, i) => {
                    return (
                      <li className="text-center" key={i}>
                        <span>{today !== "" && e.time.slice(-6)}</span>
                        <p>{today !== "" && e.feelslike_c}°</p>
                        <span>{today !== "" && e.condition.text}</span>
                        <img
                          src={today !== "" ? e.condition.icon : undefined}
                          alt="png"
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="daily" id="daily">
              <ul>
                {data !== "" &&
                  data.forecast.forecastday.map((e, i) => {
                    return (
                      <li className="text-center" key={i}>
                        <span>{data !== "" && e.date.slice(-5)}</span>
                        <p>{data !== "" && e.day.avgtemp_c}°</p>
                        <span>{data !== "" && e.day.condition.text}</span>
                        <img
                          src={data !== "" ? e.day.condition.icon : undefined}
                          alt="png"
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="info air">
            <p>Air Quality Index</p>
            <p>{data !== "" && data.current.air_quality["us-epa-index"]}</p>
            {(() => {
              if (data !== "") {
                switch (data.current.air_quality["us-epa-index"]) {
                  case 1:
                    return <p>Good/Fresh Air</p>;
                  case 2:
                    return <p>Moderate Air quality</p>;
                  case 3:
                    return <p>Unhealthy Air quality for sensitive group</p>;
                  case 4:
                    return <p>Unhealthy Air quality</p>;
                  case 5:
                    return <p>Very Unhealthy Air quality</p>;
                  case 6:
                    return <p>Hazardous Air quality </p>;
                  default:
                    return <p>Getting Air quality </p>;
                }
              }
            })()}
          </div>

        </Container>}
      {load ? <></> : <Footer />}
    </>
  );
}

export default Main;
