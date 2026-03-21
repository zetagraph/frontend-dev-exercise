import styles from "./ProductPurchase.module.css";

export const ProductPurchase = () => {
  return (
    <section className={styles.purchase}>
      <div className={styles.scoreCard} aria-label="Score 8 out of 10">
        <div className={styles.scoreEmoji} aria-hidden="true">
          👌
        </div>
        <p className={styles.scoreValue}>
          <strong>8</strong>/10
        </p>
      </div>

      <div className={styles.meta}>
        <p className={styles.priceLabel}>Price on Amazon</p>
        <p className={styles.priceValue}>$252.00</p>
      </div>

      <a
        className={styles.button}
        href="https://www.amazon.com/"
        target="_blank"
        rel="noreferrer"
      >
        Buy on amazon.com
      </a>
    </section>
  );
};
