import { Header } from "./components/Header";
import { ProductImage } from "./components/ProductImage";
import { User } from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <User name="John Smitherington" location="Boise, Idaho" />
        <ProductImage />
      </main>
    </>
  );
}

export default App;
