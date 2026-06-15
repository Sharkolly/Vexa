import React, { createContext } from "react";
import type { UserType } from "../types/user.types";

type USERAUTHCONTEXT_TYPES = {
  user: UserType | null;
  refetch: () => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  emailOnChange: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
  passwordOnChange: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
  firstNameOnChange: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
  lastNameOnChange: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
  deliveryDetails: {
    email: string;
    fullName: string;
    phone: string;
    address: string;
    state: string;
    city: string;
    landmark: string;
  };
  setDeliveryDetails: React.Dispatch<
    React.SetStateAction<{
      email: string;
      fullName: string;
      phone: string;
      address: string;
      state: string;
      city: string;
      landmark: string;
    }>
  >;
};

export const UserAuthContext = createContext<USERAUTHCONTEXT_TYPES | null>(
  null,
);
