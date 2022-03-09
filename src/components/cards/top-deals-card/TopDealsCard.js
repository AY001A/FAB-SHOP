import { Link } from "react-router-dom";
import WelderImage from "../../../assets/images/welder.jpg";
import "./style.scss";

const TopDealsCard = ({ title, image, desc, url_path }) => {
  return (
    //   <Link to={`${url_path}`} className="text-decoration-none text-black">
    <div className="card border-0 topdeals-card ">
      <div className="topdeals-card-image-wrapper card-img">
        <img
          src={WelderImage}
          alt={desc}
          className="card-img topdeals-card-image"
        />
      </div>
      <div className="topdeals-description-wrapper card-body p-0 pt-2 ">
        <p className="topdeals-title card-title fw-bold ">Metal Gate</p>
        <p className="topdeals-description card-text mb-2">&#8358; 70,000</p>
        <p className="topdeals-description card-text text-decoration-line-through">
          &#8358; 80,000
        </p>
      </div>
    </div>
    //   </Link>
  );
};

export default TopDealsCard;
