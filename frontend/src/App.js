import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";

const App = () => {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      <Single />
    </div>
  );
};

export default App;
