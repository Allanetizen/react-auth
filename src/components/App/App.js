import "./App.css";

export default function App(prop) {
 const subject = prop.subject;
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Hello, {subject}
        </p>
      </header>
    </div>
  );
}

