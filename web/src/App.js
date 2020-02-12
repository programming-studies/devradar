import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";

function App() {
  const [developers, setDevelopers] = useState([]);

  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      { timeout: 30000 }
    );
  }, []);

  useEffect(() => {
    async function loadDevelopers() {
      const response = await api.get("/developers");
      setDevelopers(response.data);
    }
    loadDevelopers();
  }, []);

  async function handleAddDeveloper(event) {
    event.preventDefault();
    const response = await api.post("/developers", {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername("");
    setTechs("");
    setDevelopers([...developers, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDeveloper}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input
              id="github_username"
              name="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              id="techs"
              name="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {developers.map(developer => (<DevItem key={developer._id} developer={developer}/>))}
        </ul>
      </main>
    </div>
  );
}

export default App;
