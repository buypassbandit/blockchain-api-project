import React from "react";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/DashBoard/Dashboard";
import Graph from "./Components/Graphs/Graph";
import DevelopedWith from "./Components/Developed/DevelopedWith";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <Dashboard />
      <Graph />
      <DevelopedWith />
      <Footer />
    </React.Fragment>
  );
};

export default App;
