import "./style.scss";

const DeliveryAddress = ({ name, address, state, number }) => {
  return (
    <div className="p-4 orderSummaryContainer bg-light mb-1">
      <div className="d-flex justify-content-between">
        <p className="deliveryName">{name}</p>
      </div>

      <p className="text-secondary ">{`${address}, ${state}`}</p>
      <p className="text-secondary small">{number}</p>
    </div>
  );
};

export default DeliveryAddress;
