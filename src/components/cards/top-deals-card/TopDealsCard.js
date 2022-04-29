import { Link } from "react-router-dom";
import WelderImage from "../../../assets/images/welder.jpg";
import Currency from "../../currency/Currency";
import "./style.scss";

const TopDealsCard = ({ title, image, desc, url_path, price, id }) => {
  const link = `${title}`.split(" ").join("-");

  return (
    <Link
      to={`products/${id}/${link}`}
      className="text-decoration-none text-black"
    >
      <div className="card border-0 topdeals-card col">
        <div className="topdeals-card-image-wrapper card-img">
          <img
            src={image}
            alt={title}
            className="card-img topdeals-card-image"
          />
        </div>
        <div className="topdeals-description-wrapper  pt-2">
          <p className="topdeals-title text-truncate">{title}</p>
          <p className="topdeals-price">
            {" "}
            <Currency>{price}</Currency>
          </p>
          <p className="topdeals-discount text-decoration-line-through">
            &#8358; {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TopDealsCard;
