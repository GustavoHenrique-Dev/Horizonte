import Style from "./Home.module.css";
import Background1 from "../../assets/herobanner2 - Horizonte.jpg";

const Home = () => {
  return (
    <div className={Style.div}>
      <img src={Background1} alt="" />
    </div>
  );
};

export default Home;
