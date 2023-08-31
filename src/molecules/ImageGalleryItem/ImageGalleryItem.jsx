import GalleryItemLikes from "../GalleryItemLikes/GalleryItemLikes";
import s from "./particle/style.module.css";

const ImageGalleryItem = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className={s.img_container}>
      <GalleryItemLikes likes={image} />
      <div className={s.details_info_container}>
        {tags.map((tag) => (
          <p key={tag}>#{tag.trimStart()}</p>
        ))}
      </div>
      <img src={image.webformatURL} alt="alt" />
    </div>
  );
};

export default ImageGalleryItem;
