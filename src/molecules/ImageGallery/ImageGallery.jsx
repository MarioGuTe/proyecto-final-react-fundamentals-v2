import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./particle/style.module.css";

const ImageGallery = ({ images }) => (
  <>
    <section className={s.img_section}>
      <h2>Imágenes Royalty Free</h2>
      <div className={s.img_gallery_container}>
        {images
          ?.map((image) => <ImageGalleryItem key={image.id} image={image} />)
          .slice(2, 20)}
      </div>
    </section>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
