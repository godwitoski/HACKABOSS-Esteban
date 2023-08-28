import "./App.css";

function App() {
  return (
    <main>
      <p>Hola desde React!</p>
      <p>{process.env.hello}</p>
    </main>
  );
}

export default App;
