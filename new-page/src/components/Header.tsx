import envelope from "../assets/envelop.svg";
import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <a className={styles.logo} href="/" aria-label="Neon home">
          <img src={logo} alt="Neon Logo" />
        </a>

        <div className={styles.notifyField}>
          <form className={styles.notifyForm}>
            <label className="srOnly" htmlFor="email">
              Email me when Neon launches
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email me when Neon launches..."
            />
            <button type="submit" aria-label="Submit email">
              <img src={envelope} alt="" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
