import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export const logout = () => {
  Swal.fire({
    title: "Log out?",
    text: "Are you sure you want to log out?",
    icon: "warning",
    confirmButtonText: "Yes, log out",
    showCancelButton: true,
    confirmButtonColor: "#DC2626",
    cancelButtonColor: "#059669",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  });
};

export const toastNotificationRemove = (productName: string) => {
  toast.custom(
    (t) => (
      <div
        className={`flex items-center gap-2 rounded-xl border border-red-300 bg-[#FEE2E2] px-4 py-3 shadow-md transition-all duration-300 ${
          t.visible ? "animate-enter opacity-100" : "animate-leave opacity-0"
        }`}
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100">
          <Trash2 size={18} color="#DC2626" strokeWidth={2} />
        </div>

        <div className="flex-1  ">
          <p className="text-sm hidden font-semibold text-[#991B1B]">
            Removed from cart
          </p>

          <p className="mt-1 text-sm text-[#991B1B]">
            <span className="font-bold">{productName} </span> removed from your
            cart.
          </p>
        </div>

        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-1 text-lg leading-none text-[#991B1B] hover:text-red-700"
          aria-label="Dismiss notification"
        >
          &times;
        </button>
      </div>
    ),
    {
      duration: 5000,
      position: "top-right",
    },
  );
};

import { CheckCircle2 } from "lucide-react";

const showAddedToCartToast = (productName: string) => {
  toast.custom(
    (t) => (
      <div
        className={`flex items-center gap-2 rounded-xl border border-green-300 bg-[#DCFCE7] px-4 py-3 shadow-md transition-all duration-300 ${
          t.visible ? "animate-enter opacity-100" : "animate-leave opacity-0"
        }`}
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={18} color="#16A34A" strokeWidth={2} />
        </div>

        {/* <div> */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#166534] hidden">
            Added to cart
          </p>

          <p className="mt-1 text-sm text-[#166534]">
            <span className="font-bold">{productName}</span> added to your cart.
          </p>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-1 text-lg leading-none text-[#166534] hover:text-green-800"
            aria-label="Dismiss notification"
          >
            &times;
          </button>
        </div>

        {/* </div> */}
      </div>
    ),
    {
      duration: 3000,
      position: "top-right",
    },
  );
};

export default showAddedToCartToast;
