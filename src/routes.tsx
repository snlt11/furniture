import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFound from "@/pages/NotFound";
import BlogRootLayout from "./pages/Blog/BlogRootLayout";
import BlogDetails from "./pages/Blog/BlogDetails";
import Blog from "./pages/Blog/Blog";

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
    ],
  },
]);

export default router;
