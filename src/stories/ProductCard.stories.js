import ProductCard from "../components/cards/product-card/ProductCard";

export default {
  title: "FabGarage/Cards/productCard",
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const ProductCardDesktop = Template.bind({});
 