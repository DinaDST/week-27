import React from "react";
import styles from "./App.css";

import Card from "./components/card";

import var1 from "./styles/var1.module.css";
import var2 from "./styles/var2.module.css";
import var3 from "./styles/var3.module.css";
import var4 from "./styles/var4.module.css";

const cards = [
  { price: "300", speed: "10" },
  { price: "450", speed: "50" },
  { price: "550", speed: "100", isSelected: "selected" },
  { price: "1000", speed: "200" },
];

function App() {
  const field = [var1, var2, var3, var4];
  return (
    <div className={styles.App}>
      {cards.map((card, i) => (
        <Card key={i} price={card.price} speed={card.speed} var={field[i]} isSelected={card.isSelected} />
      ))}
    </div>
  );
}

export default App;
