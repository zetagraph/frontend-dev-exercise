import productImage from "../assets/product.jpg";
import styles from "./ProductImage.module.css";

export const ProductImage = () => {
  return (
    <section className="product-image">
      <figure className={styles.productImage}>
        <img src={productImage} alt="Bowers and Wilkins P5 headphones" />
      </figure>
    </section>
  );
};
