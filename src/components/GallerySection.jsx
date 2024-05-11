import styles from "./GallerySection.module.css";
import * as galleryData from "../../data/gallery.json";
import GalleryImage from "./GalleryImage";
import { useState } from "react";

function GallerySection({ name }) {
  const [display, setDisplay] = useState(false);

  const gallery = galleryData.default;
  const imgs = gallery.filter((img) => img.section === name);

  return (
    <div className={styles.gallerySection}>
      <div className={styles.galleryImages}>
        {display
          ? imgs.map((img) => (
              <GalleryImage src={img.url} id={img.id} key={img.id} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default GallerySection;
