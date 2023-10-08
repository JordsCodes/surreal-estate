import "../styles/app.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="app">
      <script src="https://apis.google.com/js/platform.js" async defer />
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Properties userId={user?.sub} />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/saved-properties" element={<SavedProperties />} />
      </Routes>
    </div>
  );
};

export default App;
