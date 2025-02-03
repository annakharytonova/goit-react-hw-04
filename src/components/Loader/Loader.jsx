import { BallTriangle } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.spiner}>
      <BallTriangle height={80} width={80} color="#4fa94d" />
    </div>
  );
};

export default Loader;
