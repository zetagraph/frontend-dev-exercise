import styles from "./ProductReview.module.css";

const reviewItems = [
  {
    emoji: "🎉",
    label: "Pros",
    text: "Super high fidelity, excellent portability, unobtrusive design",
  },
  {
    emoji: "💩",
    label: "Cons",
    text: "Finicky cables, slightly uncomfortable over long periods",
  },
  {
    emoji: "💸",
    label: "Buy?",
    text: "Yes, strong recommendation.",
  },
];

export const ProductReview = () => {
  return (
    <section className={styles.review}>
      <p className={styles.eyebrow}>Review</p>
      <h1 className={styles.title}>B&amp;W P5 Headphones</h1>

      <ul className={styles.list}>
        {reviewItems.map((item) => (
          <li key={item.label} className={styles.item}>
            <span className={styles.emoji} aria-hidden="true">
              {item.emoji}
            </span>
            <p className={styles.itemText}>
              <strong>{item.label}</strong> {item.text}
            </p>
          </li>
        ))}
      </ul>

      <p className={styles.reviewText}>
        I love these headphones and they&apos;re my go to cans when I&apos;m
        sitting at my desk. The only major con is that they squeeze my head a
        bit if I wear them all day.
      </p>
    </section>
  );
};
