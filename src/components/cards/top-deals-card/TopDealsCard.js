import { Link } from "react-router-dom";
import WelderImage from "../../../assets/images/welder.jpg";
import "./style.scss";

const TopDealsCard = ({ title, image, desc, url_path }) => {
  return (
    //   <Link to={`${url_path}`} className="text-decoration-none text-black">
    <div className="card border-0 topdeals-card col">
      <div className="topdeals-card-image-wrapper card-img">
        <img
          src={WelderImage}
          alt={desc}
          className="card-img topdeals-card-image"
        />
      </div>
      <div className="topdeals-description-wrapper  pt-2">
        <p className="topdeals-title text-truncate">Metal Gate</p>
        <p className="topdeals-price">&#8358; 70,000</p>
        <p className="topdeals-discount text-decoration-line-through">
          &#8358; 80,000
        </p>
      </div>
    </div>
    //   </Link>
  );
};

export default TopDealsCard;
