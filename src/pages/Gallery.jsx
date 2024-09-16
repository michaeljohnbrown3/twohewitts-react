import Copyright from "../components/Copyright";
import LazyBackground from "../components/LazyBackground";
import PageNav from "../components/PageNav";
import styles from "./Gallery.module.css";
import * as galleryData from "../../data/gallery.json";
import { useEffect, useState } from "react";
import GalleryImage from "../components/GalleryImage";
import { NavLink } from "react-router-dom";

const gallery = galleryData.default;
const gallerySections = [...new Set(gallery.map((img) => img.section))];

function Gallery() {
  const [activeGallery, setActiveGallery] = useState(gallerySections[0]);

  function handleClick(section) {
    setActiveGallery(section);
  }

  return (
    <main className={styles.gallery}>
      <PageNav />
      <LazyBackground
        src={
          "https://ik.imagekit.io/mjb06h/TwoHewitts/originalPics/IMG_0003-lg.jpg"
        }
        preload={
          "https://ik.imagekit.io/mjb06h/TwoHewitts/originalPics/IMG_0003-lg.jpg?tr=w-400,bl-4"
        }
      />

      <section>
        <div className={styles.galleryImageSection}>
          <div className={styles.gallerySectionTitles}>
            {gallerySections.map((section) => (
              <h4
                className={section === activeGallery ? styles.white : ""}
                onClick={() => handleClick(section)}
                id={section}
                key={section}>
                {section}
              </h4>
            ))}
          </div>
          <div className={styles.imgCopyContainer}>
            <div className={styles.images}>
              {gallery
                .filter((imgs) => imgs.section === activeGallery)
                .map((img) => (
                  <GalleryImage src={img.url} id={img.id} key={img.id} />
                ))}
            </div>
          </div>
          <Copyright />
          {/* {gallerySections.map((section) => (
            <>
              <h4>{section}</h4>
              <GallerySection name={section} key={section} />
            </>
          ))} */}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
