import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Models from "../pages/Models";
import TestimonialsPage from "../pages/TestimonialsPage";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "models", element: <Models /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "team", element: <Team /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
