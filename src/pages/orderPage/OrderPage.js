import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OrderCard from "../../components/cards/order-card/OrderCard";
import { useGetOrdersByOwnerId } from "../../hook/useOrder";
import { Spinner } from "react-bootstrap";
const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  !isAuthenticated && <Navigate to={"/login"} />;

  const ownerId =
    isAuthenticated && user?.data?.data?.fabAccountDetails?.EmailAddress;

  const { data, status } = useGetOrdersByOwnerId(ownerId);

  // let reversedOrderList =
  //   status === "success" ? Object.assign({}, data?.data?.data) : [];

  // console.log(reversedOrderList);

  return (
    <div className="container mt-4 ">
      <h5>My Orders</h5>

      <div className="w-100">
        {status === "loading" && (
          <div className="text-center w-100 m-5 p-4 ">
            <Spinner className="text-primary" animation="border" />
          </div>
        )}
        {status === "success" &&
          data?.data?.data.map((order) =>
            order.OrderItem.map((prod) => (
              <OrderCard
                key={`${order.Id}${order.DateOrderered}${prod.ProductId}`}
                dateOrdered={order.DateOrderered}
                image={prod.ProductInfo.ImagesUrls[0]}
                orderNum={order.Id}
                price={prod.BaseAmount}
                productName={prod.ProductInfo.Name}
                quantity={prod.Quantity}
              />
            ))
          )}
      </div>
    </div>
  );
};

export default OrderPage;
