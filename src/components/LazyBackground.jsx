import styles from "./LazyBackground.module.css";
import { useEffect, useState } from "react";

function LazyBackground({ src, height = "100%", width = "100%", preload }) {
  const [source, setSource] = useState(preload);

  useEffect(
    function () {
      const img = new Image();
      img.src = src;
      img.onload = () => setSource(src);
    },
    [src]
  );

  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${source})`,
        height: `${height}`,
        width: `${width}`,
      }}></div>
  );
}

export default LazyBackground;
