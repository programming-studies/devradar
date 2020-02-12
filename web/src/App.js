import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

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
    await api.post("/developers", {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername("");
    setTechs("");
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
          {developers.map(developer => (
            <li className="dev-item" key={developer._id}>
              <header>
                <img src={developer.avatar_url} alt={developer.name} />
                <div className="user-info">
                  <strong>{developer.name}</strong>
                  <span>{developer.techs.join(", ")}</span>
                </div>
              </header>
              <p>{developer.bio}</p>
              <a href={`https://github.com/${developer.github_username}`}>
                Acessar perfil no Github
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
