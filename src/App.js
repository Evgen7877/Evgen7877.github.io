import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer, PageTitle } from "./components/common";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/list_leagues" element={<PageTitle />}></Route>
        <Route path="/calendar_leagues" element={"КАЛЕНДАРЬ ЛИГИ"}></Route>
        <Route path="/command_list" element={"СПИСОК КОМАНД"}></Route>
        <Route
          path="/one_team_calendar"
          element={"КАЛЕНДАРЬ ОДНОЙ КОМАНДЫ"}
        ></Route>
      </Routes>

      <br />
      <Footer />
    </div>
  );
}

export default App;
