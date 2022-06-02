import HomePage from "./pages/HomePage";
import Product from "./pages/Product";

const routes = [
  {
    link: "/",
    Component: HomePage,
    name: "Home",
    hidden: false,
  },
  {
    link: "/product/:sku",
    Component: Product,
    name: "Product",
    hidden: false,
  },
];

export default routes;
