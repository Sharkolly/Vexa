import React from "react";
import { BiPurchaseTagAlt } from "react-icons/bi";
// import { usePaystackPayment } from "react-paystack";
import Paystack from "@paystack/inline-js";

interface PaymentProps {
  email: string;
  amountInNaira: number;
}

export interface PaystackSuccessResponse {
  reference: string;

  trxref: string;

  trans: string;

  transaction: string;

  status: string;

  message: string;

  redirecturl?: string;
}

export const PayButton: React.FC<PaymentProps> = ({ email, amountInNaira }) => {

  const paystack = new Paystack();

  const handlePayment = () => {
  paystack.checkout({
    key: "pk_test_e23429cee1c47a2d55bb413e2fcc89ee91a612fc",
    email,
    amount: amountInNaira * 100, // Convert to kobo
    currency: "NGN",
    onSuccess: (transaction: PaystackSuccessResponse) => {
      console.log(transaction);
    },
    onCancel: () => {
      console.log("Payment cancelled");
    },
  });
};

  // const config = {
  //   reference: `PK_${new Date().getTime()}`,
  //   email,
  //   amount: amountInNaira * 100,
  //   publicKey: "pk_test_e23429cee1c47a2d55bb413e2fcc89ee91a612fc",
  // };

  // // const initializePayment = usePaystackPayment(config);

  // const onSuccess = (reference: PaystackSuccessResponse) => {
  //   // Reference contains the transaction ID for your backend to verify
  //   console.log("Payment successful! Reference:", reference);
  // };

  // const onClose = () => {
  //   console.log("User closed the payment modal");
  // };

  return (
    <button
      onClick={handlePayment}
      className="w-full mt-6 bg-green-700/90 text-white py-3 rounded-xl hover:opacity-90 transition flex items-center gap-2 justify-center cursor-pointer"
    >
      {/* Pay ₦{amountInNaira.toLocaleString()} */}
      <span>
        <BiPurchaseTagAlt className="w-4 h-4 " />
      </span>
      <span>Place Order</span>
    </button>
  );
};
