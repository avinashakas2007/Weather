# ☀️ **Weather App**

## 🌐 **Project Overview**

This is a **weather forecast web application** that provides real-time weather information using the **OpenWeatherMap API**. Users can search for a city's weather and view detailed forecasts, including temperature, humidity, wind speed, and more.

---

## 🔧 **Technologies Used**

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for handling requests and responses.
- **EJS**: Embedded JavaScript templating for dynamic content.
- **Body-Parser**: Middleware to parse incoming request bodies.
- **HTTPS**: To fetch weather data from OpenWeatherMap API.
- **OpenWeatherMap API**: Provides real-time and forecast weather data.
- **CSS**: For styling the UI.

---

## 💪 **Setup Instructions**

### 🛠️ Prerequisites

Make sure you have **Node.js** installed on your system.

### 📂 Clone the Repository

```bash
 git clone https://github.com/avinashakas2007/Weather.git
 cd weather-app
```

### ♻️ Install Dependencies

```bash
 npm install
```

### 📃 Create a `.env` File

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
apiid="your_openweathermap_api_key"
```

### ⚡ Run the Server

```bash
 node app.js
```

The server will start running at: `http://localhost:3000`

---

## 🌐 **App Features**

1. **Search Weather**: Users can enter a location to get weather details.
2. **Real-time Weather Data**: Fetches data from OpenWeatherMap API.
3. **5-Day Forecast**: Displays upcoming weather conditions.
4. **Temperature Details**: Shows min/max temperature.
5. **Weather Highlights**: Includes humidity, wind speed, visibility, and sea level.

---

## 🗺 **Project Structure**

```
/weather-app
│-- /public          # Static files (CSS, images)
│-- /views           # EJS templates
│-- app.js           # Main server file
│-- package.json     # Project metadata
│-- .env             # Environment variables
```

---

## 🛡️ **Security Considerations**

- **API Key Handling**: The API key is stored securely in the `.env` file.
- **HTTPS Requests**: Data is fetched securely using HTTPS.
- **Error Handling**: The app handles API response errors gracefully.

---

## 🌟 **Future Enhancements**

- Add **geolocation-based weather detection**.
- Implement a **better UI with animations**.
- Provide **hourly forecasts**.
- Support **multiple language translations**.

---

## 📈 **Example API Request**

```javascript
const url = `https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=7&units=metric&appid=${process.env.apiid}`;
```

---

## 👨‍💻 **Author**

- **Avinash**

---

