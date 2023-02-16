import React from "react";
import styles from "./App.css";

import Card from "./components/Card.jsx";

import var1 from "./styles/var1.module.css";
import var2 from "./styles/var2.module.css";
import var3 from "./styles/var3.module.css";
import var4 from "./styles/var4.module.css";

import { cards } from "./components/Tariffs.js";

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
