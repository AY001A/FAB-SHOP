import ServiceCard from "../components/cards/service-card/ServiceCard";

export default {
  title: "FabGarage/ServiceCard",
  component: ServiceCard,
};

const Template = (args) => <ServiceCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  title: "Register",
};
