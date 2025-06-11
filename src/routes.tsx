import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFound from "@/pages/NotFound";
import BlogRootLayout from "./pages/Blog/BlogRootLayout";
import BlogDetails from "./pages/Blog/BlogDetails";
import Blog from "./pages/Blog/Blog";
import ProductRootLayout from "./pages/Product/ProductRootLayout";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/Product/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "blogs",
        element: <BlogRootLayout />,
        children: [
          { index: true, element: <Blog /> },
          { path: ":id", element: <BlogDetails /> },
        ],
      },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          { index: true, element: <Product /> },
          { path: ":id", element: <ProductDetails /> },
        ],
      },
    ],
  },
]);

export default router;
