import PropTypes from "prop-types";
import s from "./particle/style.module.css";

const SearchBar = ({ onSubmit }) => {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div className={s.container}>
      <input onKeyUp={submit} type="text" placeholder="Buscar Fotografías" />
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
