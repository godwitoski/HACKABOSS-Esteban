import "./styles.css";

function App() {
  function getRandomColor() {
    const colors = [
      "red",
      "black",
      "violet",
      "aquamarine",
      "yellow",
      "blueviolet",
      "blue",
      "green",
      "orange",
      "pink",
      "turquoise",
      "lime",
      "indigo",
      "maroon",
      "gold",
      "teal",
      "purple",
      "silver",
      "coral",
      "olive",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  const randomColor = getRandomColor();

  return (
    <>
      <h1 style={{ backgroundColor: randomColor }}>React cambiando color</h1>
      <p className="importante">Hola desde React! Soy un párrafo</p>
    </>
  );
}

export default App;
