import PropTypes from "prop-types";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import s from "./particle/style.module.css";

const CategoryList = ({ categoryList, onClickItem }) => (
  <>
    <section className={s.categories_section}>
      <h2>Categorías</h2>
      <div className={s.buttons_container}>
        {categoryList
          ?.map((category) => {
            return (
              <CategoryListItem
                key={category.id}
                category={category}
                onClickItem={onClickItem}
              />
            );
          })
          .slice(0, 2)}
      </div>
    </section>
  </>
);

CategoryList.propTypes = {
  onClickItem: PropTypes.func,
  categoryList: PropTypes.array,
};

export default CategoryList;
