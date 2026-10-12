import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export  const logout = () => {
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
