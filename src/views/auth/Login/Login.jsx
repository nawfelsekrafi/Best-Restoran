import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login | Restoran";
  }, []);

  return (
    <div className="login_page">
      this is login
      </div>
  );
}
