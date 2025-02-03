import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className={s.container}>
      <p className={s.text}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
