
import './style.css';
import { useRef, useState } from 'react';

const goaObj = {
  "coord": {
    "lon": 72.8479,
    "lat": 19.0144
  },
  "weather": [
    {
      "id": 711,
      "main": "Smoke",
      "description": "smoke",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 87.78,
    "feels_like": 89.02,
    "temp_min": 82.29,
    "temp_max": 87.78,
    "pressure": 1010,
    "humidity": 45
  },
  "visibility": 1800,
  "wind": {
    "speed": 8.05,
    "deg": 320
  },
  "clouds": {
    "all": 3
  },
  "dt": 1704624463,
  "sys": {
    "type": 1,
    "id": 9052,
    "country": "IN",
    "sunrise": 1704591794,
    "sunset": 1704631522
  },
  "timezone": 19800,
  "id": 1275339,
  "name": "Mumbai",
  "cod": 200
}
const weekDays = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const WeatherTypes = [
  {
    type: "Clear",
    img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
  },
  {
    type: "Rain",
    img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
  },
  {
    type: "Snow",
    img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
  },
  {
    type: "Clouds",
    img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
  },
  {
    type: "Haze",
    img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
  },
  {
    type: "Smoke",
    img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  },
  {
    type: "Mist",
    img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
  },
  {
    type: "Drizzle",
    img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
  },
];

function App() {

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  const weekDay = weekDays[date.getDay()]; // returns a number representing the day of the week, starting with 0 for Sunday
  const hours = date.getHours();
  const minutes = date.getMinutes();


  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(goaObj);
  const [showWeather, setShowWeather] = useState([{
    type: "Smoke",
    img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  }]);
  const [loading, setLoading] = useState(false);

  //   async function getResponse(city) {
  //     const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': '6b7ab201d1msh84922755d5d9424p165da7jsn5376614f5770',
  // 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  // 	}
  // };

  //     try {
  //       setLoading(true);
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result);

  //       setApiData(result);

  //       setShowWeather(
  //         WeatherTypes.filter(
  //           (weather) => (weather.type === result.weather[0].main)
  //         )
  //       );
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setLoading(false);
  //     }
  //   };

  return (
    <div className="bg-gray-800 h-screen grid  place-items-center ">
      {/* search header */}
      <div className="bg-white w-2/4 p-4 rounded-md ">
        <div className="flex items-center justify-between">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your location"
            className="text-xl border-b
            p-1 border-gray-200 font-semibold uppercase flex-1"/>
          <button>
            <img src="https://cdn-icons-png.flaticon.com/512/758/758651.png" alt=""
              className="w-8" />
          </button>
        </div>
        <div className="grid grid-cols-2">
          {/* information div 1 */}
          <div className={`duration-300 delay-75 overflow-hidden
            ${showWeather ? "h-[27rem]" : "h-0"}`}>
            {loading ? <div>Loading...</div> :

              showWeather && <div className="text-center flex flex-col gap-6 mt-10">
                {apiData && <p className="text-xl font-semibold ">{apiData?.name},{apiData?.sys.country}</p>}

                <img src={showWeather[0]?.img} alt="..." className="w-52 mx-auto" />
                <h3 className="text-2xl font-bold text-zinc-800">{showWeather[0]?.type}</h3>
                <>
                  <div className="flex justify-between items-center">
                    <>
                      <img src='https://cdn-icons-png.flaticon.com/128/2100/2100100.png' alt="..." className="h-9 mt-1" />
                      {apiData && <h2 className="text-2xl font-semibold">{apiData?.main?.temp}&#176;F</h2>}
                    </>
                    <>
                      <img src="https://cdn-icons-png.flaticon.com/128/1171/1171187.png" alt="..." className="h-9 mt-1" />
                      {apiData && <h2 className="text-2xl font-semibold">{apiData?.wind?.speed}mph</h2>}
                    </>
                  </div>
                </>
              </div>
            }
          </div>

          {/* info div 2 */}
          <div className={`duration-300 delay-75 overflow-hidden
            ${showWeather ? "h-[27rem]" : "h-0"}`}>
            {loading ? <div></div> :
              showWeather && <div className="text-center flex flex-col gap-6 mt-10 ">

                <>
                  <div className="grid grid-cols-2 gap-6">
                    {apiData.main.humidity &&
                      <div className="flex  items-center">
                        <img src='https://cdn-icons-png.flaticon.com/128/3262/3262966.png' alt="..." className="h-9 mt-1" />
                        <h2 className="text-xl font-semibold ">{apiData?.main?.humidity}&#x25;</h2>
                      </div>
                    }
                    {apiData.main.pressure &&
                      <div className="flex  items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/3658/3658898.png" alt="..." className="h-9 mt-1" />
                        <h2 className="text-xl font-semibold">{apiData?.main?.pressure} hPa</h2>
                      </div>
                    }
                    {apiData.main.sea_level &&
                      <div className="flex  items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/2903/2903569.png" alt="..." className="h-9 mt-1" />
                        <h2 className="text-xl font-semibold">{apiData?.main?.sea_level} hPa</h2>
                      </div>
                    }
                    {apiData.main.grnd_level &&
                      <div className="flex  items-center">

                        <img src='https://cdn-icons-png.flaticon.com/128/4958/4958454.png' alt="..." className="h-9 mt-1" />
                        <h2 className="text-xl font-semibold">{apiData?.main?.grnd_level} hPa</h2>
                      </div>
                    }


                  </div>
                  {/* show time and date */}
                  <div className='absolute bottom-0 right-0 grid grid-row-2 text-slate-200 text-3xl font-bold justify-end text-end p-4 m-4'>
                    <h3>{`${currentDate},${weekDay}`}</h3>
                    <p>{`${hours}:${minutes}`}</p>
                  </div>
                </>
              </div>
            }

          </div>
        </div>
      </div>

      {/* footer */}
      <div className='text-gray-100'>
        Developed By <a href='https://github.com/Promature'>Kedar Pawar</a>
      </div>
    </div>
  );
}

export default App;
