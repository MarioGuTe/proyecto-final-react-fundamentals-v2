import s from "./particle/style.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <>
      <section className={s.img_section}>
        <h2>Imágenes Royalty Free</h2>
        <div className={s.img_gallery_container}>
          {images?.map((image) => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
