import { useState } from "react";
import Loader from "../components/Loader";
import { useQueryUserFunction } from "../lib/useQuery";
import { UserAuthContext } from "./AuthContext";
import type { UserType } from "../types/user.types";

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { data, isLoading, refetch } = useQueryUserFunction();


  const user: UserType | null = data?.message || null;

  const emailOnChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => setEmail(e.target.value);
  const passwordOnChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => setPassword(e.target.value);
  const firstNameOnChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => setFirstName(e.target.value);
  const lastNameOnChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => setLastName(e.target.value);

  if (isLoading) return <Loader height='h-[100vh]' />;

  return (
    <UserAuthContext
      value={{
        user,
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        emailOnChange,
        passwordOnChange,
        firstNameOnChange,
        lastNameOnChange,
        refetch,
      }}
    >
      {children}
    </UserAuthContext>
  );
};

export default AuthContext;
