import ReviewCount from "../components/review-count/ReviewCount";

export default {
  title: "FabGarage/Rating",
  component: ReviewCount,
};

const Template = (args) => <ReviewCount {...args} />;

export const ReviewCountTest = Template.bind({});
ReviewCountTest.args = {
  count: 25,
};
