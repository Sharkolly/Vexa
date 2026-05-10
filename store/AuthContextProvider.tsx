import { useState } from "react";
import { UserAuthContext } from "./AuthContext";

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

    // const { data, isLoading, refetch } = useQueryUserFunction();
  
    // useEffect(() => {
    //   if (!isLoading && data) {
    //     setUser(data);
    //   }
    // }, [user, data, isLoading]);

  return (
    <UserAuthContext
      value={{
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
      }}
    >
      {children}
    </UserAuthContext>
  );
};

export default AuthContext;
