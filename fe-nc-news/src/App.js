import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Articles />
      </div>
    );
  }
}

export default App;
