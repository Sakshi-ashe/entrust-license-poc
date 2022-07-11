import Content from "Layouts/Content/Content";
import "Styles/loaderStyles.css";

const Loader = () => {
  return (
    <Content alignItems="center" justifyContent="center">
      <div className="container">
        <div className="dot-windmill" />
      </div>
    </Content>
  );
};

export default Loader;