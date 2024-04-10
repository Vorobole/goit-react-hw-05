import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={css.text}>
        Sorry, we have an error, please reload the page 😢
      </p>
    </>
  );
};

export default ErrorMessage;
