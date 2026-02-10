import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authorized = sessionStorage.getItem("admin_auth") === "true";

  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
