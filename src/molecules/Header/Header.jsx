import s from "./particle/style.module.css";

const Header = ({ title }) => {
  return (
    <div className={s.header}>
      <div className={s.logo_container}>
        <p className={s.title}>{title}</p>
      </div>
    </div>
  );
};

export default Header;
