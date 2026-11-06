# Week 6 - Async JavaScript & Weather Dashboard

Live Demo: https://jamesmwangi96ismyhandle-source.github.io/iyf-s12-week-06-jamesmwangi96ismyhandle-source/

## Deliverable
Weather Dashboard using OpenWeatherMap (`index.html`, `styles.css`, `app.js`).
- Search city with button or Enter, `encodeURIComponent` handles "Dar es Salaam"
- Shows city, icon, temp °C, description, feels like, humidity, wind, pressure
- Shows Loading… while fetching, clear message for unknown city / no internet
- Last 5 searches in localStorage, click to search again
- Uses async/await with try/catch and checks `response.ok`

## How to Run
1. Copy `config.example.js` to `config.js` and add your OpenWeatherMap key:
   `const API_KEY = "your-key";`
2. Open `index.html` via Live Server.
3. The live site gets its key from Actions secret `OPENWEATHER_API_KEY`, never from git.

## Practice
- `async-practice.js` - callbacks, promises, Promise.all, async/await, fetch
- `daily-challenges/` - delay, chaining, default user, callback rewrite, allSettled

## Lessons Learned
- `fetch` does not reject on 404, so I check `response.ok` and throw for 404/401 before `response.json()`.
- I use async/await with try/catch/finally for loading and for catching TypeError as network error.
