import VerifiedPurchase from "./VerifiedPurchase";

export default {
  title: "FabGarage/alerts",
  component: VerifiedPurchase,
};

const Template = (args) => <VerifiedPurchase {...args} />;

export const Verified = Template.bind({});

Verified.args = {
  message: "hello",
};
