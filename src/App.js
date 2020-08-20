import React from "react";
import Header from "./Components/Header/Header";
import "./app.scss";
import Headline from "./Components/Headline/Headline";

function App() {
  const tempArr = [
    {
      fName: "shawon",
      lName: "MI",
      age: 29,
      email: "mi_shawon@yahoo.com",
      onlineStatus: true,
    },
  ];
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
