import React from "react";

import "./styles.css";

import Header from "../Header";
import Logs from "../Logs";
import Footer from "../Footer";

const logs = [
  { id: "1abc", title: "Title 1" },
  { id: "2abc", title: "Title 2" },
  { id: "3abc", title: "Title 3" },
  { id: "4abc", title: "Title 4" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Logs logs={logs} />
      <Footer />
    </div>
  );
}

export default App;
