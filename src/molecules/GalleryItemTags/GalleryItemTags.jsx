import s from "./particle/style.module.css";

const GalleryItemTags = ({ tagList }) => {
  const tags = tagList.tags.split(",");

  return (
    <div className={s.details_info_container}>
      {tags?.map((tag) => (
        <p key={tag}>#{tag.trimStart()}</p>
      ))}
    </div>
  );
};

export default GalleryItemTags;
