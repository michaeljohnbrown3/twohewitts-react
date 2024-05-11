function GalleryImage({ src, id }) {
  return <img src={`${src}?tr=w-150`} alt={id} />;
}

export default GalleryImage;
