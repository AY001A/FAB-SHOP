import Rating from "../components/rating/Rating";

export default {
  title: "FabGarage/Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const RatingView = Template.bind({});
Rating.args = {
  count: 5,
};
