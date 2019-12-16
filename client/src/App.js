import React, { useEffect, useState } from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import axios from "axios";
import useDarkmode from "./hooks/useDarkmode";

function App() {
  const [data, setData] = useState([]);
  const [darkmode, setDarkMode] = useDarkmode(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/players").then(res => {
      setData(res.data);
    });
  }, []);

function darkMode(){
  setDarkMode(!darkmode)
}


  return (
    <div>
      <h1></h1>
      <PlayerList darkMode={darkMode} players={data} />
    </div>
  );
}

export default App;
