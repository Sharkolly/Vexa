import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AddToCart from "./pages/AddToCart";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Delivery from "./pages/Delivery";
import NotFound from "./pages/404";
import Shop from "./pages/Shop";
import Layout from "../components/ui/Layout";
import ForgotPassword from "./pages/auth/forgot-password";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
