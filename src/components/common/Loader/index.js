import './style.css';
import { useSelector } from "react-redux";

const Loader = () => {
  const loading = useSelector((state) => state.loading);
  return <>{loading &&  <div id="loading"></div>}</>;
};

export default Loader;