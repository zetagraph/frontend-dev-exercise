import { Header } from "./components/Header";
import { ProductImage } from "./components/ProductImage";
import { ProductReview } from "./components/ProductReview";
import { User } from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <User name="John Smitherington" location="Boise, Idaho" />
        <ProductImage />
        <section className="product-details">
          <ProductReview />
        </section>
      </main>
    </>
  );
}

export default App;
