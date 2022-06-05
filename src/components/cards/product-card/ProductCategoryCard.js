import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../../services/slices/cartSlice";
import Currency from "../../currency/Currency";

const ProductCategoryCard = ({
  className,
  id,
  title,
  image,
  description,
  price,
  product,
}) => {
  const link = `${title}`.split(" ").join("-");
  const dispatch = useDispatch();

  const { Items } = useSelector((state) => state.cart);

  const handleAddtocart = () => {
    const inCart = Items.filter((prod) => prod.ProductId === id);
    !inCart.length
      ? dispatch(
          addToCart({
            BaseAmount: Number(product?.Price),
            ProductId: product?.Id,
            Name: product?.Name,
            Image: product?.ImagesUrls[0],
            TotalAmount: Number(product?.Price),
          })
        )
      : toast.info("product already in cart");
  };

  return (
    <div
      className={`product-card-with-btn card border-0 products-card mb-4 ${className}`}
    >
      <Link to={`/products/${id}/${link}`}>
        <div className="products-card-image-wrapper card-img">
          <img
            src={image}
            alt={"door for sale"}
            loading="lazy"
            className="card-img products-card-image"
          />
        </div>
      </Link>

      <div className="topdeals-description-wrapper pt-2">
        <div className="product-title-wrapper">
          <Link to={`/products/${id}/${link}`}>
            <p className="topdeals-title text-truncate  fw-bold">{title}</p>
          </Link>
          <p className="topdeals-price mb-0 fw-bold">
            <Currency>{price}</Currency>
          </p>
        </div>

        {/* <div className="d-flex">
            <RatingsViewOnly value={4} />
            <ReviewCount count={15} />
          </div> */}
        <div className="product-description card-text small d-none d-sm-block mt-2">
          <p>{description}</p>
        </div>
      </div>

      {product.Kind === "Direct" && (
        <button
          className="cart-btn btn btn-primary"
          onClick={() => handleAddtocart()}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCategoryCard;
