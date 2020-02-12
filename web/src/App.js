import React, { useEffect, useState } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
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

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input id="github_username" name="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input id="techs" name="techs" required />
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
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/5747855?s=460&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Mikhail Cavalcanti</strong>
                <span>React Js, React Native, Node Js</span>
              </div>
            </header>
            <p>Programador entusiasta</p>
            <a href="https://github.com/mikhailcavalcanti">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/5747855?s=460&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Mikhail Cavalcanti</strong>
                <span>React Js, React Native, Node Js</span>
              </div>
            </header>
            <p>Programador entusiasta</p>
            <a href="https://github.com/mikhailcavalcanti">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/5747855?s=460&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Mikhail Cavalcanti</strong>
                <span>React Js, React Native, Node Js</span>
              </div>
            </header>
            <p>Programador entusiasta</p>
            <a href="https://github.com/mikhailcavalcanti">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/5747855?s=460&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Mikhail Cavalcanti</strong>
                <span>React Js, React Native, Node Js</span>
              </div>
            </header>
            <p>Programador entusiasta</p>
            <a href="https://github.com/mikhailcavalcanti">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
