import { Header } from "./components/Header";
import { User } from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <User name="John Smitherington" location="Boise, Idaho" />
      </main>
    </>
  );
}

export default App;
