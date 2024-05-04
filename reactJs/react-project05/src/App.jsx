// App.js
import React from "react";
import Navbar from "./component/Navbar";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Authentication App</h1>
        <Navbar />
      </div>
    </AuthProvider>
  );
};

export default App;
