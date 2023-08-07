import { NextComponentType } from "next";
import styles from "./styles.module.scss";
import ReactTypingEffect from "react-typing-effect";

const About: NextComponentType = () => {
  const titles = [
    "developer",
    "engineer",
    "programmer",
    "coder",
    "full stack engineer",
    "student",
    "computer engineer",
  ];
  return (
    <div className={styles.about}>
      <h2>hello, world! 👋</h2>
      <h1>
        i&#39;m <span className={styles.name}>nishant balaji</span>
      </h1>
      <div className={styles.typing}>
        <ReactTypingEffect
          text={titles}
          speed={100}
          eraseDelay={1000}
          className="text-2xl"
        />
      </div>
    </div>
  );
};

export default About;
