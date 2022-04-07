import Rating from "../components/rating/RatingsViewOnly";

export default {
  title: "FabGarage/RatingVO",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const RatingView = Template.bind({});
RatingView.args = {
  value: 3,
};
