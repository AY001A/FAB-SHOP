import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OrderCard from "../../components/cards/order-card/OrderCard";
import { useGetOrdersByOwnerId } from "../../hook/useOrder";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  !isAuthenticated && <Navigate to={"/login"} />;

  const ownerId =
    isAuthenticated && user?.data?.data?.fabAccountDetails?.EmailAddress;

  const { data, status } = useGetOrdersByOwnerId(ownerId);

  const test = [
    {
      name: "one",
      data: [
        {
          num: 1,
        },
        {
          num: 2,
        },
        {
          num: 3,
        },
      ],
    },
    {
      name: "two",
      data: [
        {
          num: 1,
        },
        {
          num: 2,
        },
        {
          num: 3,
        },
      ],
    },
  ];
  return (
    <div className="container mt-4 ">
      <h5>My Orders</h5>

      <div className="w-100">
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
