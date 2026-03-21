import { Header } from "./components/Header";
import { ProductImage } from "./components/ProductImage";
import { ProductPurchase } from "./components/ProductPurchase";
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
          <div className="product-summary">
            <div className="product-purchase-slot">
              <ProductPurchase />
            </div>
            <div className="product-review-slot">
              <ProductReview />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
