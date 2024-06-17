import Axios from "axios";
import { useState } from "react";

export const Weather = () => {
  const [weather, setWeather] = useState("");

  const hadnledata = () => {
    Axios.get(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/last30days?key=YOUR_API_KEY&include=days"
    ).then((res) => {
      setWeather(res.value);
      console.log(weather);
    });
  };

  return (
    <div>
      <button onClick={() => hadnledata}>weather</button>
    </div>
  );
};
