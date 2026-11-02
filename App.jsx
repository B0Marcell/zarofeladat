import { useState } from "react";
import colors from "./colors.js";
import Panel from "./Panel.jsx";

function App() {
  const [selectedName, setSelectedName] = useState("");

  const selectedColor = colors.find((color) => color.name === selectedName);

  return (
    <div className="app">
      <h1>Kedvenc szín választó</h1>

      <label htmlFor="color-select">Válassz egy színt: </label>
      <select
        id="color-select"
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
      >
        <option value="">-- Válassz --</option>
        {colors.map((color) => (
          <option key={color.name} value={color.name}>
            {color.name}
          </option>
        ))}
      </select>

      {selectedColor && (
        <p className="selected">
          A kedvenc színed: <strong>{selectedColor.name}</strong>
        </p>
      )}

      <Panel color={selectedColor} />
    </div>
  );
}

export default App;
