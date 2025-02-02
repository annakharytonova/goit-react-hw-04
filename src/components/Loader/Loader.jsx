import { BallTriangle } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.spiner}>
      <BallTriangle className={s.loader} />
    </div>
  );
};

export default Loader;
