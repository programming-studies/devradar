import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function loadDevelopers() {
      const response = await api.get("/developers");
      setDevelopers(response.data);
    }
    loadDevelopers();
  }, []);

  async function handleAddDeveloper(developer) {
    const response = await api.post("/developers", developer);
    setDevelopers([...developers, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDeveloper} />
      </aside>
      <main>
        <ul>
          {developers.map(developer => (
            <DevItem key={developer._id} developer={developer} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
