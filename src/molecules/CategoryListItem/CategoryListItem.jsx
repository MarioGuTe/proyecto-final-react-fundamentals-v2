import PropTypes from "prop-types";
import s from "./particle/style.module.css";

const CategoryListItem = ({ category, onClickItem }) => {
  function handleOnClick(e) {
    onClickItem(e.target.value);
    e.target.value = "";
  }

  const tags = category.tags.split(",");

  return (
    <>
      {tags
        .map((tag) => (
          <button
            className={s.categorie_btn}
            value={tag}
            onClick={handleOnClick}
            key={tag}
          >
            {tag.trimStart()}
          </button>
        ))
        .slice(0, 2)}
    </>
  );
};

CategoryListItem.propTypes = {
  onClickItem: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryListItem;
