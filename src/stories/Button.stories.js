import Button from "../components/button/Button";

export default {
  title: "FabGarage/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Register",
  buttonType: "btn-primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Cancel",
  buttonType: "btn-danger",
};

// export const Secondary = Template.bind({});

// export default {
//     title: 'Example/Button',
//     component: Button,
//     // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//     argTypes: {
//       backgroundColor: { control: 'color' },
//     },
//   };

//   // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//   const Template = (args) => <Button {...args} />;

//   export const Primary = Template.bind({});
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   Primary.args = {
//     primary: true,
//     label: 'Button',
//   };

//   export const Secondary = Template.bind({});
//   Secondary.args = {
//     label: 'Button',
//   };

//   export const Large = Template.bind({});
//   Large.args = {
//     size: 'large',
//     label: 'Button',
//   };

//   export const Small = Template.bind({});
//   Small.args = {
//     size: 'small',
//     label: 'Button',
//   };
