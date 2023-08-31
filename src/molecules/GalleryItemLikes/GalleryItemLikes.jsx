import { FcLike } from "react-icons/fc";
import s from "./particle/style.module.css";

const GalleryItemLikes = ({ likes }) => {
  return (
    <div className={s.likes_container}>
      <FcLike value={{ className: "react_icon" }} />
      <p>{likes.likes}</p>
    </div>
  );
};

export default GalleryItemLikes;
