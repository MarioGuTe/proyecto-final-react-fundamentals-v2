import PropTypes from "prop-types";
import GalleryItemLikes from "../GalleryItemLikes/GalleryItemLikes";
import GalleryItemTags from "../GalleryItemTags/GalleryItemTags";
import s from "./particle/style.module.css";

const ImageGalleryItem = ({ image }) => (
  <div className={s.img_container}>
    <GalleryItemLikes likes={image} />
    <GalleryItemTags tagList={image} />
    <img src={image.webformatURL} alt={image.tags} />
  </div>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
};

export default ImageGalleryItem;
