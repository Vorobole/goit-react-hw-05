import css from "./Loader.module.css";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.container}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#fa8072"
        secondaryColor="#fa8072"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
