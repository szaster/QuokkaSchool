import "./App.css";

function App() {
  return (
    <div className="vh-100 code flex flex-column items-center bg-purple white pa3 fl-1 ">
      <h1 className="f2-l">Bolus timer</h1>
      <input placeholder="type your BG" />

      <button className> Run timer </button>
    </div>
  );
}

export default App;
