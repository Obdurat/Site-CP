import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/main";
import MainPage from "../pages/home-page/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  }
])

export default router;