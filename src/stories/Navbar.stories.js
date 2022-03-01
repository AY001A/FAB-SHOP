import Header from "../components/navbar/Header";

export default {
  title: "FabGarage/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const GuestNavbar = Template.bind({});
