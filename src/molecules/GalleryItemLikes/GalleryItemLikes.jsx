import PropTypes from "prop-types";
import { FcLike } from "react-icons/fc";
import s from "./particle/style.module.css";

const GalleryItemLikes = ({ likes }) => (
  <div className={s.likes_section}>
    <div className={s.likes_container}>
      <FcLike className={s.icon} />
      <p>{likes.likes}</p>
    </div>
  </div>
);

GalleryItemLikes.propTypes = {
  likes: PropTypes.object,
};

export default GalleryItemLikes;
