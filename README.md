# 🦠 COVID-19 Tracker Dashboard

A dynamic and responsive COVID-19 Tracker built using **React JS** that visualizes real-time coronavirus data, including global and country-wise statistics for total cases, recoveries, and deaths. The dashboard also includes interactive maps and trend graphs for deeper insights.

![App Screenshot][pic1.png)
pic2.png

## 🚀 Features

- 🌍 Worldwide and country-specific data
- 📊 Visual charts of daily new cases
- 🗺️ Interactive world map with case visualization using circles
- 📈 Time-series graph showing daily new cases
- 🇺🇸 Live hoverable data card per country (e.g., USA, India)
- ⚡ Fast, responsive design with React Hooks

## 🛠️ Built With

- **React JS** (Front-end framework)
- **Leaflet.js** (for interactive maps)
- **Chart.js** (for line charts)
- **Material-UI / Tailwind CSS** (for UI components & styling)
- **Disease.sh API** (for live COVID-19 data)

## 📦 Installation

```bash
git clone https://github.com/Jesmi200/Covid-19-Tracker
cd Covid-19-Tracker
npm install
npm start
The app will run on http://localhost:3000.

🧠 How It Works
Fetches real-time COVID-19 data from Disease.sh API

Displays global data (total cases, recoveries, deaths)

Maps country-wise case data using Leaflet with visual bubble size based on case numbers

Graphs show trends of daily new cases using Chart.js

📂 Project Structure
mathematica
Copy code
/src
  ├── App.js
  ├── components/
  │   ├── InfoBox.js
  │   ├── Map.js
  │   ├── Table.js
  │   └── LineGraph.js
  ├── utils/
  │   └── api.js
  └── index.js

🖼️ Preview
Total Cases: +704.8M

Recovered: +675.6M

Deaths: +7.0M

Live Countries Tracked: USA, India, France, Germany, Brazil, etc.

🌐 Data Source
All data provided by disease.sh - Open Disease Data API

📜 License
This project is licensed under the MIT License.

Made with ❤️ using React.
