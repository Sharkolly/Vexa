import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
// const AddToCart = lazy(() => import("./pages/AddToCart"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Delivery = lazy(() => import("./pages/Delivery"));
const NotFound = lazy(() => import("./pages/404"));
const Search = lazy(() => import("./pages/Search"));
const Layout = lazy(() => import("../components/ui/Layout"));
const LayoutNoFooter = lazy(() => import("../components/ui/LayoutNoFooter"));
const ForgotPassword = lazy(() => import("./pages/auth/forgot-password"));
const Services = lazy(() => import("./pages/Services"));
const ProtectedRoute = lazy(() => import("../components/ProtectedRoute"));
const ProductDetails = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Shop = lazy(() => import("./pages/Shop"));
const Checkout = lazy(() => import("./pages/Checkout"));
const RedirectRoute = lazy(() => import("../components/RedirectRoute"));
import Loader from "../components/Loader";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/login"
          element={
            <RedirectRoute>
              <SignIn />
            </RedirectRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectRoute>
              <SignUp />
            </RedirectRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RedirectRoute>
              <ForgotPassword />
            </RedirectRoute>
          }
        />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/products/product/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<LayoutNoFooter />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/delivery"
            element={
              <ProtectedRoute>
                <Delivery />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Route>,
    ),
  );

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
