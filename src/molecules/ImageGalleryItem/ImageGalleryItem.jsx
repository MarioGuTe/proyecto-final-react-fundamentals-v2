import GalleryItemLikes from "../GalleryItemLikes/GalleryItemLikes";
import GalleryItemTags from "../GalleryItemTags/GalleryItemTags";
import s from "./particle/style.module.css";

const ImageGalleryItem = ({ image }) => {
  return (
    <div className={s.img_container}>
      <GalleryItemLikes likes={image} />
      <GalleryItemTags tagList={image} />
      <img src={image.webformatURL} alt={image.tags} />
    </div>
  );
};

export default ImageGalleryItem;
