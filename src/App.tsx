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
import Services from "./pages/Services";
// import ProtectedRoute from "../components/ProtectedRoute";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/add-to-cart"
            element={
              // <ProtectedRoute>
                <AddToCart />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/delivery"
            element={
              // <ProtectedRoute>
                <Delivery />
              // </ProtectedRoute>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/product-details" element={<ProductDetails />} />
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
