let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log("緯度: " + data.coord.lon);
console.log("経度: " + data.coord.lat);
console.log("天気: " + data.weather[0].description);
console.log("最低気温: " + data.main.temp_min);
console.log("最高気温: " + data.main.temp_max);
console.log("湿度: " + data.main.humidity);
console.log("風速: " + data.wind.speed);
console.log("風向: " + data.wind.deg);
console.log("都市名: " + data.name);
let w = document.querySelector('div#result');
let p0 = document.createElement('p');
p0.textContent = ('緯度: ' + data.coord.lon);
let p1 = document.createElement('p');
p1.textContent = ('経度: ' + data.coord.lat);
let p2 = document.createElement('p');
p2.textContent = ('天気: ' + data.weather[0].description);
let p3 = document.createElement('p');
p3.textContent = ('最低気温: ' + data.main.temp_min);
let p4 = document.createElement('p');
p4.textContent = ('最高気温: ' + data.main.temp_max);
let p5 = document.createElement('p');
p5.textContent = ('湿度: ' + data.main.humidity);
let p6 = document.createElement('p');
p6.textContent = ('風速: ' + data.wind.speed);
let p7 = document.createElement('p');
p7.textContent = ('風向: ' + data.wind.deg);
let p8 = document.createElement('p');
p8.textContent = ('都市名: ' + data.name);
p7.insertAdjacentElement('beforeend', p8);
p6.insertAdjacentElement('beforeend', p7);
p5.insertAdjacentElement('beforeend', p6);
p4.insertAdjacentElement('beforeend', p5);
p3.insertAdjacentElement('beforeend', p4);
p2.insertAdjacentElement('beforeend', p3);
p1.insertAdjacentElement('beforeend', p2);
p0.insertAdjacentElement('beforeend', p1);
w.insertAdjacentElement('beforeend', p0);



