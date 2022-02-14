import Searchbar from "../containers/searchbar/Searchbar";

export default {
  title: "FabGarage/Searchbar",
  component: Searchbar,
};

const Template = (args) => <Searchbar {...args} />;

export const DesktopSearchbar = Template.bind({});
DesktopSearchbar.args = {};
